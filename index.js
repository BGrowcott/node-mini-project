const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((data) => {
    const filename = `index.HTML`;

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
            <p>location</p>
            <p>bio</p>
        </main>
        
    </body>
    </html>
    `



    fs.writeFile(filename, HTML, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

