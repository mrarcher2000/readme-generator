// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  
  if (data.license === 'None || Added Your Own Later') {
    return '';
  } 
  
  else {
    if (data.license === 'MIT License') {
      return `![GitHub license](https://img.shields.io/badge/license-MIT-green)`;
    } else if (data.license === 'GNU Affero General Public License v3.0') {
      return `![GitHub license](https://img.shields.io/badge/license-GNU%20AGPL%20v3.0-blue)`;
    } else if (data.license === 'Mozilla Public License 2.0') {
      return `![GitHub license](https://img.shields.io/badge/license-MPL%202.0-orange)`;
    } else if (data.license === 'Apache License 2.0') {
      return `![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue)`;
    }
  };
  
};

function tableFunction(data) {
  if (!data.tableOfContents) {
    return '';
  } 
  
  else {
    if (data.license !== 'None || Added Your Own Later') {
      return `## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)`
    } else {
      return `## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)`
    };
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'None || Added Your Own Later') {
    return '';
  }

  else {
    if (data.license === 'MIT License') {
      return `https://spdx.org/licenses/MIT.html`;
    } else if (data.license === 'GNU Affero General Public License v3.0') {
      return `https://spdx.org/licenses/AGPL-3.0-or-later.html`;
    } else if (data.license === 'Mozilla Public License 2.0') {
      return `https://spdx.org/licenses/MPL-2.0.html`;
    } else if (data.license === 'Apache License 2.0') {
      return `https://spdx.org/licenses/Apache-2.0.html`;
    };
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None || Added Your Own Later') {
    return '';
  }

  else {
    return `## License
    
    This project is licensed under the Open Source ${data.license}.
    A full overview of what this license covers can be found at ${renderLicenseLink(data)}.
    `;
  }
};

function renderTestSection(data) {
  if (data.tests === '') {
    return;
  }

  else {
    return `## Tests

    ${data.tests}`
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data)}

${tableFunction(data)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribute}

${renderTestSection(data)}

## Questions

For any additional questions or comments, please email the author of this project at: 
${data.email}.

*OR*

You can view other repositories made by me at https://github.com/${data.github}.

${data.contact}

${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
