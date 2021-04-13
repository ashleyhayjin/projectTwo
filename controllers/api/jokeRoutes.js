const router = require('express').Router();
const { Joke, User } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

// router.get('/jokes', async (req,res) => {
//     try {
//         const jokeData = await Joke.findAll({

//         })
//     }
// })

router.get('/', async (req, res) => {
    try{
    const jokeData = Joke.findAll({ 
        attributes: ['joke_text'],
    });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try{
        const jokeData = await Joke.create({
            joke_text: req.body.joke_text,
        });

        res.status(200).json(jokeData);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;
