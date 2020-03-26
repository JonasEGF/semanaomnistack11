const express = require('express');

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/incidentcontroller');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();


routes.post('/sessions', sessionController.creaters);


routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;