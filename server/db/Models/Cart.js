const Sequelize = require('sequelize');

const {
  UUID, UUIDV4, STRING,
} = Sequelize;
const { db } = require('../db');

const Cart = db.define('Cart', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  items: {
    type: STRING,
    allowNull: false,
    get() {
      return this.getDataValue('items').split(';');
    },
    set(val) {
      this.setDataValue('items', val.join(';'));
    },
  },
});

module.exports = { Cart };
