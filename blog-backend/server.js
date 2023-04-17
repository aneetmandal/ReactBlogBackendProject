const express = require('express');
const app = express();
const PORT = 3001;
const socket = require('socket.io');

const server = app.listen(PORT, ()=>{
    console.log("Listening on Port 3001");
})

const io = socket(server, {
    cors: {
        origin: '*'
    }
});

io.on("connection", (socketClient) => {
    console.log(socketClient.id);

    socketClient.on("HOME", (clientData)=>{
        console.log(clientData);
    });

    socketClient.on("ARTICLE", (clientData)=>{
        console.log(clientData);
    });

    socketClient.on("BOLLYWOOD", (clientData)=>{
        console.log(clientData);
    });

    socketClient.on("B-ARTICLE", (clientData)=>{
        console.log(clientData);
    });


    socketClient.on("B-BOLLYWOOD", (clientData)=>{
        console.log(clientData);
    });

});

app.get("/", (req, res) => {
    console.log("Loaded Home Page Succesfully!");
    res.sendStatus(200);
});

app.get("/article", (req, res) => {
    console.log("Loaded Bollywood Page Succesfully!");
    res.sendStatus(200);
});


app.get("/bollywood", (req, res) => {
    console.log("Loaded Bollywood Page Succesfully!");
    res.sendStatus(200);
});


