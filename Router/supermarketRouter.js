const { Router } = require('express');
const { createSupermarket, getAllSupermarket} = require('../Controller/supermarketController')

const supermarketRouter = require('express').Router();

supermarketRouter.post('/super', createSupermarket);
supermarketRouter.get('/super', getAllSupermarket);

module.exports = supermarketRouter