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

const validateDrawio = async (filePath) => {
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

    const outFile = `reports/${path.basename(filePath)}.md`;
    const summaryFile = `reports/${path.basename(filePath)}.summary.json`;
    fs.writeFileSync(outFile, reportContent.content);
    fs.writeFileSync(summaryFile, JSON.stringify(reportContent.summary));

    console.log(`✅ Validation report generated: ${outFile}`);
  } catch (error) {
    console.error(`❌ Error validating ${filePath}:`, error.response?.data || error.message);
  }
};

const generateReport = (filePath, results) => {
  const fileName = path.basename(filePath);

  let total = results.length;
  let info = 0;
  let warning = 0;
  let error = 0;

  results.forEach(rule => {
    if (rule.severity === 'INFO') info++;
    else if (rule.severity === 'WARNING') warning++;
    else error++;
  });

  let report = `### Validation Summary for: \`${fileName}\`\n\n`;

  report += `| Status | Count |\n`;
  report += `| ------------| -------|\n`;
  report += `| Total | ${total}   |\n`;
  report += `| ✅ Info | ${info}   |\n`;
  report += `| ⚠️ Warning | ${warning}   |\n`;
  report += `| ❌ Error | ${error}   |\n\n`;

  for (const item of results) {
    const { id, displayName, description, severity, results: issues } = item;
    const icon = severity === 'INFO' ? '✅' : severity === 'WARNING' ? '⚠️' : '❌';
    const color = severity === 'WARNING' ? '<span style="color:orange">WARNING</span>' : (severity === 'ERROR' ? '<span style="color:red">ERROR</span>' : 'INFO');

    report += `** ${icon} ${displayName}** (Severity: ${color}) \n\n`;
    report += `- ** ID **: \`${id}\`\n`;
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

  return {
    content: report,
    summary: { total, info, warning, error }
  };
};

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) {
  console.error("❌ Please provide a valid .drawio file path");
  process.exit(1);
}

validateDrawio(filePath);
