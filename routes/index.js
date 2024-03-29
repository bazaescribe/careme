var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/success', function(req, res, next) {
  res.render('thanks', { title: 'Express' });
});

router.get('/proclean', function(req, res, next) {
  res.render('desinfeccion', { title: 'Express' });
});


module.exports = router;
