// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  
  ## Credits
  
  ${data.credits}

  ## License
  

  This application is covered by the ${data.license} license. 

  ## Features
  
  ${data.features}
  
  ## Tests
  
  ${data.test}

  ## Questions
  
  If you have any questions, feel free to reach out:
  
  - GitHub: [${data.creator}](https://github.com/${data.creator})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
