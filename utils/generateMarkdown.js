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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

`;
}

module.exports = generateMarkdown;
