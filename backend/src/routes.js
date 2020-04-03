const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const ongcontroller = require('./controllers/ongcontroller');
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();


routes.post('/sessions', sessionController.create);
routes.get('/ongs', ongcontroller.index);


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongcontroller.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),profilecontroller.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentcontroller.index);


routes.post('/incidents', incidentcontroller.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentcontroller.delete);

module.exports = routes;