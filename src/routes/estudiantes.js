const express = require('express');
const { Estudiante, Curso } = require('../models');
const router = express.Router();

// 1. Obtener todos los estudiantes (con sus cursos inscritos)
router.get('/', async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll({
      include: {
        model: Curso,
        as: 'cursos',
        through: { attributes: [] }
      }
    });
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Obtener un estudiante por ID
router.get('/:id', async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id, {
      include: {
        model: Curso,
        as: 'cursos',
        through: { attributes: [] }
      }
    });
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Crear nuevo estudiante (CRUD - Create)
router.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = await Estudiante.create(req.body);
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. Actualizar estudiante (CRUD - Update)
router.put('/:id', async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    await estudiante.update(req.body);
    res.json({ mensaje: 'Estudiante actualizado con éxito', estudiante });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5. Eliminar estudiante (CRUD - Delete)
router.delete('/:id', async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }
    await estudiante.destroy();
    res.json({ mensaje: 'Estudiante eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Inscribir un estudiante a un curso (Relación en acción)
router.post('/:id/cursos/:cursoId', async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    const curso = await Curso.findByPk(req.params.cursoId);

    if (!estudiante || !curso) {
      return res.status(404).json({ error: 'Estudiante o Curso no encontrado' });
    }

    await estudiante.addCurso(curso);
    res.json({ mensaje: `Estudiante ${estudiante.nombre} inscrito en el curso ${curso.titulo}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
