// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `https://opensource.org/licenses/${license}`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Features
  
  ${data.features}
  
  ## Installation
  
  To install the necessary dependencies, run the following command(s):
  
  \`\`\`
  npm install
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributors}
  
  ## Tests
  
  To run tests, use the following command(s):
  
  \`\`\`
  npm test
  \`\`\`
  
  ## Questions
  
  If you have any questions, feel free to reach out:
  
  - GitHub: [${data.creator}](https://github.com/${data.creator})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
