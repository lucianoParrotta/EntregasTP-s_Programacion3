const personas = require('../models/personas');

const obtenerPersonas = (req, res) => {
  res.json(personas);
};

module.exports = { obtenerPersonas };