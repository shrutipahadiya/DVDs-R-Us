const Sequelize = require('sequelize');
const chalk = require('chalk')
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/DVDsRUs';


const db = new Sequelize(DATABASE_URL, {
  logging: false,
});

const User = db.define('User', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      }, 
    phoneNumber: {
        type: STRING,
        // allowNull: false,
        unique: true,
        // valdation needs to be worked out 
        // validate: {
        //     isValidPhoneNo: function (value) {
        //         if (!value) return value;

        //         var regexp = /^[0-9]+$/;
        //         var values = (Array.isArray(value)) ? value : [value];

        //         values.forEach(function (val) {
        //             if (!regexp.test(val)) {
        //                 throw new Error("Number only is allowed.");
        //             }
        //         });
        //         return value;
        //     },
        // }
    },
    firstName: {
        type: STRING,
        allowNull: false,
    },
    lastName: {
        type: STRING,
        allowNull: false,
    },
    email: {
        type: STRING,
        allowNull: false,
        isEmail: true,
    },
    cart: {
        type: Sequelize.ARRAY,
        allowNull: false,
        defaultValue = [],
    },
    previousOrders: {
        type: Sequelize.ARRAY,
        allowNull: false,
        defaultValue  = []
    },
    shippingAddressStreet: {
        type: STRING,
        allowNull: true,
      },
      shippingAddressUnit: {
        type:STRING,
        allowNull: true,
      },
      shippingAddressZIP: {
        type: INTEGER,
        allowNull: true,
      },
      shippingAddressCity: {
        type:STRING,
        allowNull: true,
      },
})

const Movie = db.define('Vendor', {
  // Nick to work on this //
})

const seed = async (force = false) => {
  try {
    await db.sync({ force });
    console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
  } catch (e) {
    console.log(chalk.red('Error while connecting to database'));
    throw e;
  }
}

seed()

User.hasMany(Movie,{ foreignKey: 'MovieId'})

module.exports = {
  db,
  seed,
  User,
  Movie,
};
