const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

export class Base extends Model {}

Base.init({
  // Model attributes are defined here
  cacheflow_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cacheflow_created: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cacheflow_updated: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cacheflow_deleted: {
    type: DataTypes.DATE
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  // sequelize, // We need to pass the connection instance
  modelName: 'Base' // We need to choose the model name
});
