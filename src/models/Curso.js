const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Día 3 y 5: Modelos, tipos de datos y validaciones
const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El título del curso no puede estar vacío' }
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  duracionSemanas: {
    type: DataTypes.INTEGER,
    defaultValue: 4,
    validate: {
      min: 1
    }
  }
}, {
  timestamps: true,
  tableName: 'cursos'
});

module.exports = Curso;
