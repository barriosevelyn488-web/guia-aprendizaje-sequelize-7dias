const express = require('express');
const { Curso, Estudiante } = require('../models');
const router = express.Router();

// 1. Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.findAll({
      include: {
        model: Estudiante,
        as: 'estudiantes',
        through: { attributes: [] }
      }
    });
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Crear un curso
router.post('/', async (req, res) => {
  try {
    const nuevoCurso = await Curso.create(req.body);
    res.status(201).json(nuevoCurso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Eliminar un curso
router.delete('/:id', async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }
    await curso.destroy();
    res.json({ mensaje: 'Curso eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
