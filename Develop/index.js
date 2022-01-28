// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    name:"title",
    message: "What is the title of your application?"
},
{
    type:"input",
    name:"description",
    message: "Provide primary functionality of your application?"
},
{
    type:"input",
    name:"installation",
    message: "Please list installation instructions."
},
{
    type:"input",
    name:"usage",
    message: "Please provide usage instruction for your application."
},
{
    type:"input",
    name:"test",
    message: "Please list any test instructions for your application."
},
{
    type:"input",
    name:"contribution",
    message: "Please list any contributors to your application?"
},
{
    type:"input",
    name:"email",
    message: "For any questions, please enter your email."
},
{
    type:"input",
    name:"github",
    message: "Please enter your github username."
},
//License selection from list of licensing organizatiions

{
    type:"list",
    name:"license",
    message:"Please provide your license issuer for your application?",
    choices:["MIT", "Apache", "Mozilla", "GNU", "ISC", "N/A"]
},

];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(response =>{
    fs.writeFileSync("readmetest.md", generateMarkdown(response))
})
}

// Function call to initialize app
init();