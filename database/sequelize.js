const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('supermarket', 'root', 'Sodade16', {
    host: 'localhost',
    dialect:  'mysql' 
  });

module.exports = sequelize