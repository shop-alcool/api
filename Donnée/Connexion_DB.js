const { Client } = require('pg');

// Créer une instance du client PostgreSQL
const client = new Client({
  host: 'localhost', // ou l'adresse de ton serveur PostgreSQL
  port: 5432,        // Port par défaut de PostgreSQL
  user: 'ton_utilisateur', // Ton nom d'utilisateur
  password: 'ton_mot_de_passe', // Ton mot de passe
  database: 'ta_base_de_donnees', // Nom de ta base de données
});

// Connexion à la base de données
client.connect()
  .then(() => {
    console.log('Connecté à la base de données');
    
    // Exécuter une requête
    return client.query('SELECT * FROM ta_table');
  })
  .then(res => {
    console.log(res.rows); // Afficher les résultats
  })
  .catch(err => {
    console.error('Erreur de connexion:', err);
  })
  .finally(() => {
    client.end(); // Fermer la connexion
  });
