const fs = require('fs');
const inquirer = require('inquirer');
// import generateMarkdown from './utils/generateMarkdown,js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What problem does this project solve:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can I contribute:'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    }
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md created successfully!');
        }
    });
}


// TODO: Create a function to initialize app
    
function init() { 
        inquirer.prompt(questions).then(answers => {
            // generate read.me content

        // const licenseBadgeUrl = `${answers.license}`
        const readMeContent = 
        `
        //     # ${answers.title}
            
            ## Description
            ${answers.description}
            
            ## Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [License](#license)
            
            ## Installation
            ${answers.installation}
            
            ## Usage
            ${answers.usage}
            
            ## Contributing
            ${answers.contributing}
            
            ## Tests
            ${answers.tests}
            
            ## License
            This project is licensed under the ${answers.license} License.
            `;

            writeToFile('README.md', readMeContent); // write readmeContent);
    });
}
            

// Function call to initialize app
init();
