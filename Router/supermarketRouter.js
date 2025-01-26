const { Router } = require('express');
const { createSupermarket } = require('../Controller/supermarketController')

const supermarketRouter = require('express').Router();

supermarketRouter.post('/super', createSupermarket);

module.exports = supermarketRouter