// Importing required modules
const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();

// Starting the server
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Creating a WebSocket server instance
const wss = new WebSocketServer({ server });

// Event listener for new client connections
wss.on('connection', (ws) => {
    console.log('A new client connected');

    // Event listener for receiving messages from clients
    ws.on('message', (message) => {
        console.log('Received message:', message);
        ws.send(`Hi you tyeped : ${message}`);
    });

    // Event listener for client disconnections
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
