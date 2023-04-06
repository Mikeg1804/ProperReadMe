// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');



const fileGenerator = (answersObject) => {
    return `
# Purpose: ${answersObject.Purpose} 
## Outcome: 
${answersObject.Outcome} 
### Installlation:
${answersObject.Installation} 


- Example: ${answersObject.Examples} 
- Credit: ${answersObject.Credit}  
* Licenses: ${answersObject.Licenses} 
    `;
  };

// TODO: Create an array of questions for user input

  var x = [
    {
      // name = what key will the answer to this question be saved in
      name: 'Purpose',
      //  message = what message will be displayed to the user when this question is being asked
      message: 'What is your motivation for building this project?',
      type: 'input',
    },
    {
        name: 'Outcome',
        message: 'What was the outcome or what was learned from the project?',
        type: 'input',
    },
    {
        name: 'Installation',
        message: 'What are the steps for installation?',
        type: 'input',
    },
    {
        name: 'Examples', 
        message: 'What are some usage examples?',
        type: 'input',
    },
    {
        name: 'Credit', 
        message: 'Who are the participants who deserve credits for this project?',
        type: 'input',
    },
    {
        name: 'Licenses',
        message: 'What are any licensing rights that need to be disclosed for this project?',
        type: 'input',
    },
    {
        name: 'Badges',
        message: 'What are some badges relating to this project?',
        type: 'input',
    },
    {
        name: 'Features',
        message: 'What are some features of this project?',
        type: 'input',
    },
]




  

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(x)
    .then(answers => {
        console.log(answers);
    
        // TODO: Create a function to write README file
    
        writeToFile('README-5.md', fileGenerator(answers))
        
            console.log('success');
          });
}

// Function call to initialize app
init();





