const { User } = require('../models');

const userData = [
    {
        username: "testMan",
        email: "test@test.com",
        password: "test123456",
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;