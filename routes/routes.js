const express = require('express');
const app = express.Router();
const jwtCheck = require('../Controller/Auth/Auth');
const client = require('../Donnée/Connexion_DB');

app.get('/', function (req, res) {
    res.send({ message: 'Hello, world!' });
});
// app.use(jwtCheck);
// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

app.get('/alcool', function (req, res) {
    client.query('SELECT * FROM alcohol')
        .then(result => {
            if (result.rows.length === 0) {
                console.log(rows);
                return res.status(404).json({ message: 'Aucun alcool trouvé' });
            } else {
                console.log(result.rows);
                return res.status(200).json(result.rows);
            }
        })
        .catch(err => {
            console.log(rows);
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

app.get('/alcool/:id', function (req, res) {
    client.query('SELECT * FROM alcohol WHERE id = $1', (req.params.id))
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(200).send(result.rows[0]);
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

app.post('/alcool', function (req, res) {
    const { name, price, quantity, description } = req.body;
    client.query('INSERT INTO alcohol(name, price, quantity, description) VALUES($1, $2, $3, $4) RETURNING *', [name, price, quantity, description])
        .then(result => {
            res.status(201).json(result.rows[0]);
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

app.patch('/alcool/:id', function (req, res) {
    const { name, price, quantity, description, id } = req.body;
    client.query('UPDATE alcohol SET name = $1, price = $2, quantity = $3, description = $4 WHERE id = $5 RETURNING *', [name, price, quantity, description, id])
        .then(result => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(200).json(result.rows[0]);
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

app.delete('/alcool/:id', function (req, res) {
    client.query('DELETE FROM alcohol WHERE id = $1', [req.params.id])
        .then(result => {
            if (result.rowCount === 0) {
                return res.status(404).json({ message: 'Aucun alcool trouvé' });
            } else {
                return res.status(204).json({ message: 'Alcool supprimé' });
            }
        })
        .catch(err => {
            console.error('Erreur de la requête SQL:', err);
            res.status(500).json({ message: 'Erreur interne du serveur', error: err });
        });
});

module.exports = app;