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

// Call validation API
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

    console.log(reportContent); // Output to GitHub Actions log or summary
    return reportContent;
  } catch (error) {
    console.error(`❌ Error validating ${filePath}:`, error.response?.data || error.message);
    return null;
  }
};

// Generate Markdown table-style report
const generateReport = (filePath, results) => {
  const fileName = path.basename(filePath);

  let report = `### 📁 \`${fileName}\`\n\n`;
  report += `| Validation Type | Severity | Description |\n`;
  report += `|-----------------|----------|-------------|\n`;

  for (const rule of results) {
    const { displayName, severity, results: issues, description } = rule;
    const icon = severity === 'INFO' ? '✅' : severity === 'WARNING' ? '⚠️' : '❌';

    // Use first issue message or fallback to description
    const shortDesc = issues?.length > 0
      ? issues[0].message || description
      : 'No issues found.';

    report += `| ${displayName} | ${icon} ${severity} | ${shortDesc} |\n`;
  }

  return report;
};

const filePath = process.argv[2];
if (!filePath || !fs.existsSync(filePath)) {
  console.error("❌ Please provide a valid .drawio file path");
  process.exit(1);
}

validateDrawio(filePath);
