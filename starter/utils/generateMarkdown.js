// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
[![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
### Installation:
To install the necessary dependencies, open the console and run the following:
\`\`\`${data.installation}\`\`\`
### Usage:
${data.usage}
### Licence:
This project is licensed under:
${data.license}
### Contributing:
${data.contribute}
### Tests:
To test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Contact details:
If you have any questions please contact via email ${data.email} or 
[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
 