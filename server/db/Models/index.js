const { Movie } = require('./Movie');
const { Session } = require('./Session');
const { User } = require('./User');
const { Cart } = require('./Cart');

Session.belongsTo(User);
User.hasMany(Session);
Cart.belongsTo(Session);

module.exports = {
  Movie,
  Session,
  User,
};
