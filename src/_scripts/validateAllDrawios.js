// validateAllDrawios.js
const fs = require('fs');
const path = require('path');
const validateDrawio = require('./validateDrawio'); // Import your single validator

const allReports = [];
const inputFiles = process.argv.slice(2); // Read all passed drawio files

(async () => {
  let totalInfo = 0, totalWarning = 0, totalError = 0;

  for (const file of inputFiles) {
    const reportContent = await validateDrawio(file); // true to suppress individual console logs
    if (reportContent) {
      allReports.push(reportContent.report);
      totalInfo += reportContent.counts.info;
      totalWarning += reportContent.counts.warning;
      totalError += reportContent.counts.error;
    }
  }

  // Header Summary
  summary += `Summary Across ${inputFiles.length} Architecture Diagram(s)\n\n`;
  summary += `| Metric         | Count |\n|----------------|-------|\n`;
  summary += `| Total Architecture Diagrams | ${inputFiles.length} |\n`;
  summary += `| ✅ Info         | ${totalInfo} |\n`;
  summary += `| ⚠️ Warning      | ${totalWarning} |\n`;
  summary += `| ❌ Error        | ${totalError} |\n\n`;
  summary += `---\n\n`;

  // Append each report
  summary += allReports.join('\n---\n\n');

  console.log(summary);
})();
