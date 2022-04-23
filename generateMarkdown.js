//starter code is from week 9 homework 2 of UW Coding Bootcamp. Starter code included: for function names and desired functionality and the start of the "generateMarkdown function" with the #${data.title}

//function returns license badge, for whatever license is passed in. Will return an empty string if no license
//License render link sourced from here: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md 
function renderLicenseBadge(license){
    if(license !== ""){
        return "https://img.shields.io/github/license/" + license;
    } else{
        return "";
    }

}

//this function returns the license link, unless there is no license. Then it will return an empty string
function renderLicenseLink(license) {

}

//Function returs the license section of the README, unless there is not one. Then it returns an empty string
function renderLicenseSection(license) {

}

//this function will take in user's information about their application or webpage and create a README that is unique to their project. From the looks of the starter code. We'll be passing in data in the form of an object and using template literals to fill in the unique project information
//README is modeled after the template that can be found here: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide The README parts were modeled after this template.
function generateMarkdown(data) {
    return `# ${data.title}
    
## Application Description 
${data.description}

## Steps for Install
${data.installationSteps}

## User Instructions
${data.instructions}

## Credits/Shoutouts
${data.credits}

## Licensing
${renderLicenseBadge(data.license)}
    `;
}

// exports function so that it can be used in other 
module.exports = generateMarkdown;