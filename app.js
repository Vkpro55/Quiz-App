// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');

// Load routes
const routes = require('./routes/index');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://vinodrao835:HSS48moPGuiUmTQw@cluster0.hdrfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB Connection Succeeded.');
    } catch (err) {
        console.log('Error in DB connection: ' + err);
    }
}
// Call the function to connect to the database
connectToDatabase();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
