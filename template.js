const html = (data) => {
  return `<!DOCTYPE html>
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
            <p>${data.bio}</p>
            <p>${data.linkedin}</p>
            <p>${data.github}</p>
        </main>
    
    </body>
    </html>`;
};

// Export the html function
module.exports = {
  html,
};
