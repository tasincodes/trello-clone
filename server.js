const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./src/routes');
const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//routing implement 
app.use('/api/v1', routes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT || PORT, () => {
  console.log('Server running on port =>',PORT);
});
