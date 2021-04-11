const router = require('express').Router();
const {  User, Joke } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('dashboard', { 
      logged_in: req.session.logged_in 
    });
});



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
