const router = require('express').Router();
const { User, Category, Joke } = require('../models');

const userData = require('./userData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  };
  
  seedDatabase();
  