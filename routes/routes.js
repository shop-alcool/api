const express = require('express');
const app = express.Router();
<<<<<<< HEAD
const jwtCheck = require('../Controller/Auth/Auth');
=======
const client = require('../Donnée/Connexion_DB');

>>>>>>> bdd
app.get('/', function (req, res) {
    res.json({ message: 'Hello, world!' });
});
app.use(jwtCheck);
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get('/alcool', function (req, res) {
    client.query('SELECT * FROM alcohol')
        .then(result => {
            if (result.rows.length === 0) {
                console.log(rows);
                return res.status(404).json({ message: 'Aucun alcool trouvé' });
            }
            res.json(result.rows);
        })
        .catch(err => {
            console.log(rows);
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

module.exports = app;