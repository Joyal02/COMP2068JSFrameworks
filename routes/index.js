var express = require('express');
var router = express.Router();

// Route to display information about the dog
router.get('/dog', function(req, res, next) {
  res.render('dog', { title: 'Dog Page' });
});

// Route to display information about the cat
router.get('/cat', function(req, res, next) {
  res.render('cat', { title: 'Cat Page' });
});


// Route to display information about the bird
router.get('/bird', function(req, res, next) {
  res.render('bird', { title: 'Bird Page' });
});

// Route to display information about the fish
router.get('/fish', function(req, res, next) {
  res.render('fish', { title: 'Fish Page' });
});
module.exports = router;
