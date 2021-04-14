const router = require('express').Router();
const {  User, Joke, Category } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    console.log(req.body);
  const jokeData = await Joke.findAll({
      attributes: ['joke_text'],
      include: [{
          model: User,
          attributes: ['username']
      }],
  }); 
  const categoriesData = await Category.findAll({
     attributes:['category_name']
   }); 
  const categories = categoriesData.map((cat) => cat.get({plain: true}));
  const jokes = jokeData.map((joke) => joke.get({ plain: true }));
  console.log("jokes: ", jokes)
  res.render('dashboard', { 
      username: req.body.username,
      categories,
      jokes, 
      logged_in: req.session.logged_in,
  });
}
  catch (err) {
      res.status(500).json(err)
  }
});
module.exports = router;

router.get('/jokes', (req,res) => {
  console.log("req.session:", req.session);
  if(req.session.logged_in){
    res.render('newJoke',{
      logged_in: true,
      username: req.session.username,
    });
  }
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


module.exports = router;
