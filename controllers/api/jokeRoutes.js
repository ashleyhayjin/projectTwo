const router = require('express').Router();
const { Joke, User } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Joke.findAll({
        attributes: ['id', 'joke_text', 'user_id', 'category_id'],
        include: [{
            model: User,
            attributes: ['username']
        }]
    })
    .then(jokeData => res.json(jokeData))
    .catch(err => {res.status(500).json(err)});
})
module.exports = router;
