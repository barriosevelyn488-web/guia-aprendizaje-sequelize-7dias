const express = require('express');
const { sequelize } = require('./models');
const estudiantesRoutes = require('./routes/estudiantes');
const cursosRoutes = require('./routes/cursos');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/cursos', cursosRoutes);

// Ruta base con información de la API
app.get('/', (req, res) => {
  res.json({
    mensaje: '🚀 API REST con Express y Sequelize lista',
    guia: 'Ruta de Aprendizaje de 7 Días',
    endpoints: {
      estudiantes: '/api/estudiantes',
      cursos: '/api/cursos'
    }
  });
});

// Sincronización con la Base de Datos y arranque del servidor
async function startServer() {
  try {
    // Sincroniza los modelos con la base de datos (crea las tablas automáticamente)
    await sequelize.sync({ alter: true });
    console.log('✅ Base de datos SQLite sincronizada correctamente');

    app.listen(PORT, () => {
      console.log(`🌐 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
