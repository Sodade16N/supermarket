const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require ('../database/sequelize')
class supermarket extends Model { }

supermarket.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    storeName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'supermarket', // We need to choose the model name
    tableName: 'supermarkets',
    timestamps:true
  },
);

 module.exports = supermarket   