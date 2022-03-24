const express = require('express');
const persona_route = express.Router();
const personaSchema = require('../models/personaModel');

/* Ruta para crear un persona
Endpoint: http://localhost:5000/api/v1/personas/persona */
persona_route.post('/persona', (req, res) => {
  const persona = personaSchema(req.body);
  persona
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para listar los personas
Endpoint: http://localhost:5000/api/v1/personas */
persona_route.get('/', (req, res) => {
  personaSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para consultar un persona especifico
Endpoint: http://localhost:5000/api/v1/personas/:personaId */
persona_route.get('/:personaId', (req, res) => {
  const { personaId } = req.params;
  personaSchema
    .findById(personaId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para editar un persona especifico
Endpoint: http://localhost:5000/api/v1/personas/:personaId */
persona_route.put('/:personaId', (req, res) => {
  const { personaId } = req.params;
  const personaBody = req.body;
  personaSchema
    .updateOne({ _id: personaId}, {$set: personaBody} )
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para eliminar un persona especifico
Endpoint: http://localhost:5000/api/v1/personas/:personaId */
persona_route.delete('/:personaId', (req, res) => {
  const { personaId } = req.params;
  personaSchema
    .remove({ _id: personaId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = persona_route;
