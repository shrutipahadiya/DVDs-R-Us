const { Movie } = require('./Movie');
const { Session } = require('./Session');
const { User } = require('./User');
const { Cart } = require('./Cart');
const { Review } = require('./Review');

Session.belongsTo(User);
User.hasMany(Session);
Cart.belongsTo(Session);
Review.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(Movie);
Movie.hasMany(Review);

module.exports = {
  Movie,
  Session,
  User,
  Review,
};
