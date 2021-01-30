const express = require('express');
const app = express();

const PORT = 5010;

app.get('/', (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
            body {
                width: 100%;
                height: 100vh;
            }
            div {
                display: grid;
                place-items: center;
                height: inherit;
            }
            h1 {
                color: rgb(30, 32, 33);
            }
        </style>
        <title>Addiena Concepts</title>
    </head>
    <body>
        <div><h1>Coming Soon</h1></div>
    </body>
    </html>`);
});

app.listen(PORT, ()=>{
    console.log(`simple2 listening on PORT: ${PORT}`);
});