const { User } = require('../models');

const userData = [
    {
        username: "jaimem",
        password: "techy123"
    },
    {
        username: "user1",
        password: "techy123"
    },
    {
        username: "user2",
        password: "techy123"
    },
    {
        username: "user4",
        password: "techy123"
    },
    {
        username: "user5",
        password: "techy123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;