// Require modules
// Load express
const express = require('express');
const path = require('path');

// require the Sneaker 'database'
const sneakerDb = require('./data/sneaker-db');

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)
// https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
// Directory where static files are located
app.use(express.static(__dirname + '/'))

// Mount routes
// Define a 'root' route directly on app
// Next lesson we'll use better practice routing
app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/sneakers', (req, res) => {
    const sneakers = sneakerDb.getAll();
    res.render('sneakers/index', {sneakers})
})

// Tell the app to listen to port 3000
// for HTTP requests from clients
app.listen(3000, () => {
    console.log('Listening on port 3000');
});