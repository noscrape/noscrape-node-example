const express = require("express");
const { Noscrape } = require("noscrape");

const server = new express()

server.get('/', async (req, res) => {
    const noscrape = new Noscrape("Roboto.ttf");
    const obfuscated = noscrape.obfuscate("hello world")
    const font = await noscrape.render();
    res.send(`
    <html lang="en">
        <head>
            <title>Noscrape - DEMO</title>
            <style>
                @font-face {
                    font-family: 'noscrape-obfuscated';
                    src: url('data:font/truetype;charset=utf-8;base64,${font.toString("base64")}');
                }
            </style>
        </head>
        <body>
            <div style="font-family: 'noscrape-obfuscated'">${obfuscated}</div>
        </body>
        </html>
    `)
})

server.listen(1234)
