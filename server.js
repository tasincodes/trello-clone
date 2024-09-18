const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const http = require('http');
const { Server } = require('socket.io');
const { Socket } = require('dgram');

const PORT = process.env.PORT || 8000;


dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected')

    socket.on('boardCreated',(data)=>{
      console.log("Board created event received :",data);
    })
  });
});


// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.io = io; // Attach Socket.IO instance to the request object
  next();
});


//routing implement 
app.use('/api/v1', routes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

server.listen(process.env.PORT || PORT, () => {
  console.log('Server running on port =>', PORT);
});
