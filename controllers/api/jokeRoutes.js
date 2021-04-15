const router = require('express').Router();
const { Joke, User, Category } = require('../../models');
const sequelize = require('../../config/connection');


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
            category_id: req.body.category_id,
        });
        const categoryData = await Category.create({
            category_name: req.body.category_name,

        });
        res.status(200).json(jokeData);
        res.status(200).json(categoryData);

    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;
