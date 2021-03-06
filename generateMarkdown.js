//starter code is from week 9 homework 2 of UW Coding Bootcamp. Starter code included: for function names and desired functionality and the start of the "generateMarkdown function" with the #${data.title}

//function returns license badge, for whatever license is passed in. Will return an empty string if no license
//License render link sourced from here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md 
function renderLicenseBadge(license){
    if(license === "Apache License 2.0") {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if(license === "GNU GPLv2") {
       return `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
   } else if(license === "GNU GPLv3") {
       return `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
   } else if(license === "ISC License") {
       return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
   } else if(license === "MIT") {
       return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
   } else{
       return " ";
   }

}

//License Info placeholder
"Apache License 2.0", 
"GNU GPLv3", 
"GNU GPLv2", 
"MIT", 
"ISC License"

//this function returns the license link, unless there is no license. Then it will return an empty string
function renderLicenseLink(license) {
 if(license === "Apache License 2.0") {
     return "https://opensource.org/licenses/Apache-2.0";
 } else if(license === "GNU GPLv2") {
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
} else if(license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
} else if(license === "ISC License") {
    return "https://opensource.org/licenses/ISC";
} else if(license === "MIT") {
    return "https://opensource.org/licenses/MIT";
} else{
    return "";
}

}

//Function returns the license section of the README, unless there is not one. Then it returns an empty string
function renderLicenseSection(license) {
if (license === "none") {
    return " ";

} else {
    return `## Licensing
This project is covered under the ${license} license. Here is the [link](${renderLicenseLink(license)}) for more information about this license type.
`
}
    
}

//this function will take in user's information about their application or webpage and create a README that is unique to their project. From the looks of the starter code. We'll be passing in data in the form of an object and using template literals to fill in the unique project information
//README is modeled after the template that can be found here: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide The README parts were modeled after this template.
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Application Description 
${data.description}

## Table of Contents
- [Steps for Install](#steps-for-install)
- [Usage Instructions](#user-instructions)
- [Contributions](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Licensing](#licensing)
- [Questions](#questions)


## Steps for Install
${data.installationSteps}

## User Instructions
${data.instructions}

## Contribution Guidelines
${data.credits}

## Test Instructions
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have additional questions you contact via GitHub at [${data.userGitHub}](https://github.com/${data.userGitHub}). Also, you can email your inquiries to [${data.userEmail}]("mailto:${data.userEmail}")
    `;
}

// exports function so that it can be used in other 
module.exports = generateMarkdown;