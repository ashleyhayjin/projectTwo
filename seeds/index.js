const sequelize = require('../config/connection');
const User = require('../models/User');
const Joke = require('../models/Joke');
const Category = require('../models/Category');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const jokeData = require('./jokeData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const categories = await Category.bulkCreate(categoryData, {
      individualHooks: true,
      returning: true,
    });

    for (const joke of jokeData){
      await Joke.create({
        ...joke,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        category_id: categories[Math.floor(Math.random() * users.length)].id
      });
    };

    process.exit(0);
  };
  
  seedDatabase();
  