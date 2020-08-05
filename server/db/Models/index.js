const { Movie } = require('./Movie');
const { Session } = require('./Session');
const { User } = require('./User');
const { Cart } = require('./Cart');
const { Order } = require('./Order');

Session.belongsTo(User);
User.hasMany(Session);
Cart.belongsTo(Session);
Cart.belongsTo(User);
// Order.belongsTo(Cart);
Movie.belongsToMany(Cart, { through: Order });
Cart.belongsToMany(Movie, { through: Order });

module.exports = {
  Movie,
  Session,
  User,
  Cart,
  Order,
};
