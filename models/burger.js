"use strict";

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
			type: DataTypes.STRING
		},
    devoured: {
			type: DataTypes.BOOLEAN,
			default: false
		}
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'burgers',
  });

  return Burger;
};
