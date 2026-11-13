const { sequelize, Estudiante, Curso } = require('./models');

async function seed() {
  try {
    await sequelize.sync({ force: true });
    console.log('📦 Base de datos reiniciada para datos de prueba');

    // Crear cursos de ejemplo
    const cursoNode = await Curso.create({
      titulo: 'Node.js & Express Fundamentals',
      descripcion: 'Aprende backend desde cero con JavaScript.',
      duracionSemanas: 3
    });

    const cursoSequelize = await Curso.create({
      titulo: 'Sequelize ORM Mastery',
      descripcion: 'Bases de datos relacionales, modelos y migraciones.',
      duracionSemanas: 2
    });

    // Crear estudiantes de ejemplo
    const juan = await Estudiante.create({
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      edad: 22
    });

    const maria = await Estudiante.create({
      nombre: 'María Gómez',
      email: 'maria.gomez@example.com',
      edad: 25
    });

    // Relacionar estudiantes con cursos
    await juan.addCurso(cursoNode);
    await juan.addCurso(cursoSequelize);
    await maria.addCurso(cursoSequelize);

    console.log('✅ Datos de prueba insertados con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error ejecutando seed:', error);
    process.exit(1);
  }
}

seed();
