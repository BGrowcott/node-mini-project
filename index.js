const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you?',
      }
  ])
  .then((data) => {
    const filename = `index.HTML`;
    console.log(data)

    const HTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header><span>linkedin</span><span>github</span></header>
        <main>
            <p>${data.name}</p>
            <p>${data.location}</p>
            <p>bio</p>
        </main>
        
    </body>
    </html>
    `



    fs.writeFile(filename, HTML, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

