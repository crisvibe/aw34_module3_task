var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', (req, res) => {
  res.status(200).json({ message: "Welcome!" });
});

router.get('/about', (req, res) => {
  res.status(200).json({ message: "Cris", about: "Learning to deploy to servers using Render" });
});

router.get('/random-number', (req, res) => {
  let randomNumber = Math.floor((Math.random() * 10) + 1);
  res.status(200).json({ number: randomNumber });
});

module.exports = router;
