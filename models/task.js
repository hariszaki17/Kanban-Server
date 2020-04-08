'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    get id() {
      return this.id
    }
    get title() {
      return this.title
    }
    get category() {
      return this.category
    }
    get userId() {
      return this.userId
    }
  }
 
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Task'
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Task;
};