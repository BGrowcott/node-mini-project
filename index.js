const inquirer = require("inquirer");
const fs = require("fs");

// Bring in template file
const template = require("./template.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you?",
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me about yourself?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn profile URL?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub profile URL?",
    },
  ])
  .then((data) => {
    const filename = `index.HTML`;
    console.log(data);
    // Write to the file
    fs.writeFile(filename, template.html(data), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
