const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
<<<<<<< HEAD
class User extends Model { }

// create fields/columns for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
=======
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the PRimary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
>>>>>>> origin
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
<<<<<<< HEAD
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
=======
        // define and email column
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate emai values in thei table
            unique: true,
            // if allowNull is se t false, we can run our data thrgouh validators before creating the table data
>>>>>>> origin
            validate: {
                isEmail: true
            }
        },
<<<<<<< HEAD
=======
        // define a password column
>>>>>>> origin
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
<<<<<<< HEAD
=======
                // this means the password mush be at least four characters long
>>>>>>> origin
                len: [4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
<<<<<<< HEAD
);

module.exports = User;
=======
);    

module.exports = User;
>>>>>>> origin
