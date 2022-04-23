const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');

//Creates an array of questions for user input
const questions = [
    {type:"input", name:"gitHub", message:"What is your github username? If you don't have one, leave input blank"},
    {type:"input", name:"repository", message:"What is this repostitory name? Please input exact name from github."},
    {type:"input", name:"title", message:"What is the title of your project?"}, 
    {type:"input", name:"description", message:"Please provide a short description of your project"}, 
    {type:"input", name:"installationSteps", message: "Are there steps required for installation? If so type them separated by '-', if not, leave blank"}, 
    {type:"input", name:"instructions", message:"Please provide quick instructions for use of your project/app"},
    {type:"input", name:"credits", message:"Anyone/thing you'd like to credit? Please input them now"}, 
    {type:"input", name:"license", message:"What is your license for this project?"}
];

//Creates a function to write a README file
function writeToFile(filename, data){
    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("File was created successfully"));
}


function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            console.log(data);
            writeToFile("README.md", data);
        })

}

init();