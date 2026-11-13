const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Día 3 y 5: Modelos, tipos de datos y validaciones
const Estudiante = sequelize.define('Estudiante', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre no puede estar vacío' },
      len: { args: [2, 100], msg: 'El nombre debe tener entre 2 y 100 caracteres' }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Debe ser un correo electrónico válido' }
    }
  },
  edad: {
    type: DataTypes.INTEGER,
    validate: {
      min: { args: [12], msg: 'La edad mínima permitida es 12 años' }
    }
  }
}, {
  timestamps: true,
  tableName: 'estudiantes'
});

module.exports = Estudiante;
