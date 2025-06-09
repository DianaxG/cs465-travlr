const express = require('express');
const router = express.Router();

const travelController = require('../app_server/controllers/travel');

router.get('/', (req, res) => {
  res.render('index', { title: 'Travlr Home' });
});

router.get('/travel', travelController.travel);

module.exports = router;
