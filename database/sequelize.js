const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('sql8759557', 'sql8759557', 'JRNvBGNLl3', {
    host: 'sql8.freesqldatabase.com',
    dialect:  'mysql' 
  });

module.exports = sequelize