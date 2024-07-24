const Membresia = require('../models/membresiaModel');

const membresiaController = {
  createMembresia: async (req, res) => {
    const { tipo, descripcion, costo } = req.body;
    try {
      const result = await Membresia.create(tipo, descripcion, costo);
      res.status(201).json({ message: 'Membresía creada correctamente', membresia_id: result.insertId });
    } catch (error) {
      console.error('Error al crear membresía:', error);
      res.status(500).json({ error: 'Error al crear membresía' });
    }
  },

  getMembresiaById: async (req, res) => {
    const membresia_id = req.params.membresia_id;
    try {
      const [rows, fields] = await Membresia.findById(membresia_id);
      if (rows.length === 0) {
        res.status(404).json({ error: 'Membresía no encontrada' });
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error('Error al obtener membresía por ID:', error);
      res.status(500).json({ error: 'Error al obtener membresía por ID' });
    }
  },

  getAllMembresias: async (req, res) => {
    try {
      const [rows, fields] = await Membresia.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener todas las membresías:', error);
      res.status(500).json({ error: 'Error al obtener todas las membresías' });
    }
  },

  updateMembresia: async (req, res) => {
    const membresia_id = req.params.membresia_id;
    const { tipo, descripcion, costo } = req.body;
    try {
      await Membresia.update(membresia_id, tipo, descripcion, costo);
      res.json({ message: 'Membresía actualizada correctamente' });
    } catch (error) {
      console.error('Error al actualizar membresía:', error);
      res.status(500).json({ error: 'Error al actualizar membresía' });
    }
  },

  deleteMembresia: async (req, res) => {
    const membresia_id = req.params.membresia_id;
    try {
      await Membresia.delete(membresia_id);
      res.json({ message: 'Membresía eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar membresía:', error);
      res.status(500).json({ error: 'Error al eliminar membresía' });
    }
  }
};

module.exports = membresiaController;