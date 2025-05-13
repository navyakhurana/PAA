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

    const validationData = response.data.results;
    const reportContent = generateReport(filePath, validationData);

    if (!silent) {
      console.log(reportContent);
    }

    return reportContent;
  } catch (error) {
    console.error(`❌ Error validating ${filePath}:`, error.response?.data || error.message);
    return null;
  }
};

const generateReport = (filePath, results) => {
  const fileName = path.basename(filePath);
  const summaryRows = [];

  let total = results.length;
  let info = 0;
  let warning = 0;
  let error = 0;

  results.forEach(rule => {
    if (rule.severity === 'INFO') info++;
    else if (rule.severity === 'WARNING') warning++;
    else error++;

    summaryRows.push({
      validationType: rule.displayName,
      severity: rule.severity,
      description: rule.description,
    });
  });

  let report = `### \`${fileName}\`\n\n`;
  report += `| Validation Type | Severity | Description |\n`;
  report += `|------------------|----------|-------------|\n`;

  for (const row of summaryRows) {
    const icon = row.severity === 'INFO' ? '✅' : row.severity === 'WARNING' ? '⚠️' : '❌';
    report += `| ${row.validationType} | ${icon} ${row.severity} | ${row.description} |\n`;
  }

  report += `\n`;

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

// Export for use in other scripts
module.exports = validateDrawio;
