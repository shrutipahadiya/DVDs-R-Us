const { Movie } = require('./Movie');
const { Session } = require('./Session');
const { User } = require('./User');
const { Cart } = require('./Cart');
const { Review } = require('./Review');
const { Order } = require('./Order');

Session.belongsTo(User);
User.hasMany(Session);
Cart.belongsTo(Session);
Review.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(Movie);
Movie.hasMany(Review);
Cart.belongsTo(User);
// Order.belongsTo(Cart);
Movie.belongsToMany(Cart, { through: Order });
Cart.belongsToMany(Movie, { through: Order });

module.exports = {
  Movie,
  Session,
  User,
  Review,
  Cart,
  Order,
};
