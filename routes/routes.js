const express = require('express');
const app = express.Router();
const jwtCheck = require('../Controller/Auth/Auth');
app.get('/', function (req, res) {
    res.json({ message: 'Hello, world!' });
});
app.use(jwtCheck);
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

module.exports = app;