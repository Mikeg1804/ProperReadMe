// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
    
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// var inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your name?',
//       name: 'name',
//     },
//     {
//       type: 'list',
//       message: 'What is your favorite color?',
//       name: 'color',
//       choices: ['Red', 'Blue', 'Green', 'Yellow'],
//     },
//   ])
//   .then((answers) => {
//     console.log(`Hello ${answers.name}, your favorite color is ${answers.color}!`);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

  

// TODO: Create an array of questions for user input
var questions = inquirer.questions( ['What is your motivation for building this project?',
'What problem were problem does it solve?',
'What was the outcome or what did you learn?',
'What are the steps for installations?',
'What are some usage examples?', 
'Who else deserve credit for this project?',
'What are the licenses involved in this project?',
'What are some badges?',
'What are some features for this project?']);

console.log(questions);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
