require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const formRoutes = require('./routes/form')
const cors = require('cors');

// express App
const app = express()

//midllewere
app.use(express.json())
app.use(cors());

//routes
app.use('/api',formRoutes)

// database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully Connected to MongoDB !!!'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Listening for request
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} !!!`));
