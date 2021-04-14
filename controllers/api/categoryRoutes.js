const router = require('express').Router();
const { Category, Joke } = require('../../models');

router.get('/:category_name', async (req, res) => {
    try{
    const categoryData = await Category.findAll({ 
        where: { category_name: req.params.category_name},
        include: [{
            model: Joke,
            attributes: ['joke_text']
        }],
    });
    const category = categoryData.map((cat) => cat.get({plain: true}));
    res.render('categories', {
        category
    });
    res.status(200).json(categoryData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;