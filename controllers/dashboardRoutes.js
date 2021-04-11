const router = require('express').Router();
const sequelize = require('../config/connection');
const { Joke, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    if(req.session.logged_in) {
      Joke.findAll({
        attributes: ['id', 'joke_text', 'user_id', 'category_id'],
        include: [{
            model: User,
            attributes: ['username']
        }]
      })
      .then(jokeData => {
          const jokes = jokeData.map(joke => joke.get({plain: true}))
          res.render('dashboard', {jokes, logged_in: true});
      })
      .catch(err => {res.status(500).json(err)});
    }
});
module.exports = router;