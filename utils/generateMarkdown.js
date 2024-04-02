
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  // Define badge URLs for different licenses
  switch (license) { 
      case 'MIT':
          return "https://img.shields.io/badge/License-MIT-yellow.svg";
      case 'GNU GPLv3':
          return "https://img.shields.io/badge/License-GPLv3-blue.svg";
      case 'Apache 2.0':
          return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      case 'BSD 3-Clause':
          return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      default:
          return ''; // Return an empty string if no license is provided
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
      case 'MIT':
          return "https://opensource.org/licenses/MIT";
      case 'GNU GPLv3':
          return "https://www.gnu.org/licenses/gpl-3.0";
      case 'Apache 2.0':
          return "https://opensource.org/licenses/Apache-2.0";
      case 'BSD 3-Clause':
          return "https://opensource.org/licenses/BSD-3-Clause";
      default:
          return ''; // Return an empty string if no license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
      case 'MIT':
          return "This project is licensed under the MIT license.";
      case 'GNU GPLv3':
          return "This project is licensed under the GNU GPLv3 license.";
      case 'Apache 2.0':
          return "This project is licensed under the Apache 2.0 license.";
      case 'BSD 3-Clause':
          return "This project is licensed under the BSD 3-Clause license.";
      default:
          return ''; // Return an empty string if no license is provided
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 

return `# ${data.title} 



## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${renderLicenseBadge(data.license)} License.
`;
}



module.exports = generateMarkdown;
