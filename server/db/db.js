const Sequelize = require('sequelize');
const chalk = require('chalk')
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/DVDsRUs';
const User = require('./Models/User')
const Movie = require('./Models/Movie')

const db = new Sequelize(DATABASE_URL, {
    logging: false,
});

const seed = async (force = false) => {
    try {
        await db.sync({ force });
        console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
    } catch (e) {
        console.log(chalk.red('Error while connecting to database'));
        throw e;
    }
};

seed()

User.hasMany(Movie, { foreignKey: 'MovieId' })

module.exports = {
    db,
    seed,
    User,
    Movie,
};
