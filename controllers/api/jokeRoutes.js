const router = require('express').Router();
const { Joke, User } = require('../../models');
const sequelize = require('../../config/connection');
const { findOne } = require('../../models/Joke');


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
        const userData = await User.findOne({ where: { username: req.session.username } });
        console.log('userData', userData);
        const jokeData = await Joke.create({
            joke_text: req.body.joke_text,
            user_id: userData.id
        });
        // const userData = await User.findOne({ where: { username: req.body.username } });
        // console.log("userData:" , userData);
        console.log("joke-body", jokeData);
        res.status(200).json(jokeData);
        // res.status(200).json(categoryData);

    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;
