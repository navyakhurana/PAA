const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const API_URL = 'https://arch-val.cfapps.eu12.hana.ondemand.com/api/validate-architecture';
const API_KEY = process.env.ARCH_API_KEY;

if (!API_KEY) {
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

    const validationData = response.data.results;
    const reportContent = generateReport(filePath, validationData);
    const counts = countSeverities(validationData);

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
  let info = 0, warning = 0, error = 0;
  results.forEach(rule => {
    if (rule.severity === 'INFO') info++;
    else if (rule.severity === 'WARNING') warning++;
    else error++;
  });
  return { info, warning, error };
};

const generateReport = (filePath, results) => {
  const fileName = path.basename(filePath);
  const counts = countSeverities(results);
  const total = results.length;

  let report = `### 📁 \`${fileName}\`\n\n`;

  // Summary table
  report += `| Validation Type | Count |\n`;
  report += `|------------------|-------|\n`;
  report += `| Total Rules      | ${total} |\n`;
  report += `| ✅ Info           | ${counts.info} |\n`;
  report += `| ⚠️ Warning        | ${counts.warning} |\n`;
  report += `| ❌ Error          | ${counts.error} |\n\n`;

  // Detailed per-rule output
  for (const item of results) {
    const { id, displayName, description, severity, results: issues } = item;
    const icon = severity === 'INFO' ? '✅' : severity === 'WARNING' ? '⚠️' : '❌';

    report += `#### ${icon} ${displayName} (Severity: ${severity})\n\n`;
    report += `- **ID**: \`${id}\`\n`;
    report += `- **Description**: ${description}\n`;

    if (issues.length > 0) {
      report += `- **Issues:**\n`;
      issues.forEach(issue => {
        report += `  - ${issue.message}\n    - Component: \`${issue.component}\`\n`;
      });
    } else {
      report += `- ✅ No issues found.\n`;
    }

    report += `\n`;
  }

  return report;
};

// If executed directly from CLI
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath || !fs.existsSync(filePath)) {
    console.error("❌ Please provide a valid .drawio file path");
    process.exit(1);
  }
  validateDrawio(filePath);
}

module.exports = validateDrawio;
