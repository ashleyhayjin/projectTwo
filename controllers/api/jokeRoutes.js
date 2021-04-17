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

router.get('/weird', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Weird' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get('/dry', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Dry' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get('/developer', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Developer' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get('/old', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Old' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get('/dadjokes', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Dad Jokes' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get('/animal', async (req, res) => {
    try{
    const jokeData = await Joke.findAll({ where: { category_name: 'Animal' } });
    res.status(200).json(jokeData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try{
        console.log(req);
        const userData = await User.findOne({ where: { username: req.session.username } });
        console.log('userData', userData);
        const jokeData = await Joke.create({
            joke_text: req.body.joke_text,
            category_name: req.body.category_name,
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
