const express = require('express');
const app = express.Router();

app.get('/', function (req, res) {
    res.json({ message: 'Hello, world!' });
});

module.exports = app;