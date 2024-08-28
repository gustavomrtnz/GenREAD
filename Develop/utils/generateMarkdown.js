// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Example: If the license is "MIT", return the Markdown for a MIT license badge
  // Replace "MIT" with the actual license name.
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Example: If the license is "MIT", return the URL for the MIT license
  // Replace "MIT" with the actual license name.
  return `[MIT License](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // Example: If the license is "MIT", return the Markdown for the MIT license section
  // Replace "MIT" with the actual license name.
  return `## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the ${data.title} project, please don't hesitate to reach out!
  Visit [GitHub](https://github.com/${data.username}) for more information.
  Visit [Email](mailto:${data.email}) for direct inquiries.

`;
}

module.exports = generateMarkdown;

