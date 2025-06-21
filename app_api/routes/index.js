const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');

// GET all trips
router.get('/trips', tripsCtrl.tripsList);

// GET a single trip by code
router.get('/trips/:tripCode', tripsCtrl.tripsFindByCode);

// POST a new trip
router.post('/trips', tripsCtrl.tripsCreate);

router.put('/trips/:tripId', tripsCtrl.tripsUpdate);

module.exports = router;
