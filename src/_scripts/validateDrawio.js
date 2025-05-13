const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const API_URL = 'https://arch-val.cfapps.eu12.hana.ondemand.com/api/validate-architecture';
const API_KEY = process.env.ARCH_API_KEY;

if (!API_KEY && require.main === module) {
  console.error("❌ ARCH_API_KEY is not set in environment variables");
  process.exit(1);
}

const validateDrawio = async (filePath, silent = false) => {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));

    const response = await axios.post(API_URL, form, {
      headers: {
        ...form.getHeaders(),
        'x-api-key': API_KEY,
      },
    });

    // Filter out INFO severity rules
    const filteredResults = response.data.results.filter(rule => rule.severity !== 'INFO');

    const reportContent = generateReport(filePath, filteredResults);
    const counts = countSeverities(filteredResults);

    if (!silent) console.log(reportContent);

    return {
      report: reportContent,
      counts,
    };
  } catch (error) {
    console.error(`❌ Error validating ${filePath}:`, error.response?.data || error.message);
    return null;
  }
};

const countSeverities = (results) => {
  let warning = 0, error = 0;
  results.forEach(rule => {
    if (rule.severity === 'WARNING') warning++;
    else if (rule.severity === 'ERROR') error++;
  });
  return { warning, error };
};

const generateReport = (filePath, results) => {
  const fileName = path.basename(filePath);
  let report = `### \`${fileName}\`\n\n`;

  if (results.length === 0) {
    report += `✅ No warnings or errors found.\n`;
    return report;
  }

  report += `| ID | Validation Type | Severity | Description | Issues |\n`;
  report += `|----|------------------|----------|-------------|--------|\n`;

  results.forEach(rule => {
    const icon = rule.severity === 'WARNING' ? '⚠️' : '❌';

    const issuesList = rule.results
      .filter(issue => issue.message !== 'No issues found.')
      .map((issue, index) =>
        `${index + 1}. ${issue.message}<br>Component: \`${issue.component}\``
      );

    const issuesCell = issuesList.length > 0
      ? issuesList.join('<br><br>')
      : '✅ No issues found.';

    report += `| ${rule.id} | ${rule.displayName} | ${icon} | ${rule.description} | ${issuesCell} |\n`;
  });

  return report;
};

// CLI entry
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath || !fs.existsSync(filePath)) {
    console.error("❌ Please provide a valid .drawio file path");
    process.exit(1);
  }
  validateDrawio(filePath);
}

module.exports = validateDrawio;
