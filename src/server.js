const express = require('express');
const { sequelize } = require('./models');
const estudiantesRoutes = require('./routes/estudiantes');
const cursosRoutes = require('./routes/cursos');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(express.json());

// Ruta de health check / documentación rápida
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Rutas de recursos
app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/cursos', cursosRoutes);

// Manejo de rutas inexistentes (404)
app.use((req, res) => {
  res.status(404).json({ status: 'fail', mensaje: 'Ruta no encontrada' });
});

// Middleware centralizado de manejo de errores (Clean Architecture / Best Practices)
app.use(errorHandler);

async function startServer() {
  try {
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
