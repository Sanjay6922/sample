const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

// contactus
app.get('/contactus', (req, res) => {
    res.render('contactus', { title: 'Contact Us' });
});
// Profile Route
const profileData = {
    name: 'John fon',
    age: 30,
    place: 'New York'
};

app.get('/profilepage', (req, res) => {
    res.render('profile', { title: 'John Doe', profileData });
});

const port = 3000;
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
