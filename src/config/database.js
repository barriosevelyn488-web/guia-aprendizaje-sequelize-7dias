const { Sequelize } = require('sequelize');
const path = require('path');

// Configuración con SQLite para ejecutar inmediatamente sin instalar bases de datos externas
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
  logging: false // Cambiar a console.log para ver las sentencias SQL en la consola
});

module.exports = sequelize;
