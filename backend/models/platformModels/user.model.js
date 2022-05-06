import { Sequelize, DataTypes } from 'sequelize';
import { Base } from '../base.model';
// const sequelize = new Sequelize('sqlite::memory:');


class User extends Base {}

User.init({
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
//   sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'user'
});

User.associate = (models) => {
	User.hasMany(models.Company, {
	  foreignKey: 'cacheflow_id',
	  as: 'user_id',
	  through: models.UserCompany
	});
};

// the defined model is the class itself
// console.log(User === sequelize.models.User); // true