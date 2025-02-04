const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../server/server");  // Assure-toi du bon chemin vers server.js

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
