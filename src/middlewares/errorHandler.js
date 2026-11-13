const errorHandler = (err, req, res, next) => {
  console.error(`[Error Log]: ${err.message}`);

  // Errores de validación de Sequelize
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    const errores = err.errors.map(e => ({ campo: e.path, mensaje: e.message }));
    return res.status(400).json({
      status: 'fail',
      mensaje: 'Error de validación en los datos enviados',
      errores
    });
  }

  // Error genérico de servidor
  return res.status(err.status || 500).json({
    status: 'error',
    mensaje: err.message || 'Error interno del servidor'
  });
};

module.exports = errorHandler;
