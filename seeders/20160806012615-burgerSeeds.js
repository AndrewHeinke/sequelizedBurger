'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'Chedder Cheezy',
      devoured: false
    }, {
      burger_name: 'The Macho Burger',
      devoured: false
    }, {
      burger_name: 'Terminator Beef',
      devoured: false
    }, {
      burger_name: 'Le Burger',
      devoured: false
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('burgers', null, {});

  }
};
