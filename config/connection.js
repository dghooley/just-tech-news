// import the Sequelize contstructor from the libarary
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just-tech-news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;