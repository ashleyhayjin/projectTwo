const router = require('express').Router();
const sequelize = require('../config/connection');
const { Joke, User } = require('../models');
// const withAuth = require('../utils/auth');


// router.get('/', withAuth, (req, res) => {
//     if(req.session.logged_in) {
//       Joke.findAll({
//         attributes: ['joke_text'],
//         // include: [{
//         //     model: User,
//         //     attributes: ['username']
//         // }]
//       })
//       .then(jokeData => {
//           const jokes = jokeData.map(joke => joke.get({plain: true}))
//           res.render('dashboard', {jokes, logged_in: true});
//       })
//       .catch(err => {res.status(500).json(err)});
//     }
// });

router.get('/', async (req, res) => {
  try {
  const jokeData = await Joke.findAll({
      attributes: ['joke_text'],
      // include: [{
      //     model: User,
      //     attributes: ['username']
      // }],
  });
  const jokes = jokeData.map((joke) => joke.get({ plain: true }));
  res.render('dashboard', { 
      jokes, 
      logged_in: req.session.logged_in
  });
  }
  catch (err) {
      res.status(500).json(err)
  }
});
module.exports = router;