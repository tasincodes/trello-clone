const io = require('socket.io-client');
const socket = io('http://localhost:8000');


socket.on('boardCreated', (data) => {
    console.log('Board created:', data);
});

// Handle connection
socket.on('connect', () => {
    console.log('Connected to server');
});

// Handle disconnection
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});