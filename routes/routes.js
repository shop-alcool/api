const express = require('express');
const app = express.Router();
const {auth} = require('../Controller/Auth/index');
app.get('/', function (req, res) {
    res.json({ message: 'Hello, world!' });
});
app.use({auth});
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

module.exports = app;