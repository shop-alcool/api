require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("../routes/userRoutes"); 

app.use("/api/users", userRoutes);
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`
  );

sequelize
  .authenticate()
  .then(() => {
    console.log("🟢 Connexion à PostgreSQL réussie");
  })
  .catch((err) => {
    console.error("🔴 Impossible de se connecter à la base de données :", err);
  });

module.exports = sequelize;

app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));

sequelize.sync().then(() => {
  console.log("🔹 Tables créées et synchronisées");
});

module.exports = sequelize;
