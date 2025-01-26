const supermarketModel = require('../models/supermarket');
const {v4:uuidv4} = require('uuid')

exports.createSupermarket = async (req, res) => {
  try {
    const { storeName, location, email, phoneNumber } = req.body;
    const existSupermarket = await supermarketModel.findAll({ where: { email: email } });

    if (existStudent.length == 1) {
      return res.status(400).json('supermarket already exist')
    }

    const createSupermarket = await supermarketModel.create({
      id: uuidv4(),
      storeName,
      location,
      email,
      phoneNumber
    });

    res.status(201).json({
      message: 'supermarket created successfully',
      totalsupermarket: createSupermarket.length,
      data: createSupermarket
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}

exports.getAllSupermarket = async (req, res) => {
    try {
      const supermarket = await supermarketModel.findAll();
      res.status(200).json({
        message: 'Check supermarket below',
        data: students
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        error: error.message
      })
    }
  }