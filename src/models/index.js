const sequelize = require('../config/database');
const Estudiante = require('./Estudiante');
const Curso = require('./Curso');

// Día 5: Relaciones (Muchos a Muchos: un estudiante toma varios cursos y un curso tiene varios estudiantes)
Estudiante.belongsToMany(Curso, { through: 'EstudiantesCursos', as: 'cursos' });
Curso.belongsToMany(Estudiante, { through: 'EstudiantesCursos', as: 'estudiantes' });

module.exports = {
  sequelize,
  Estudiante,
  Curso
};
