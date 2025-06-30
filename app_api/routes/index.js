const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth.middleware');
const tripsCtrl = require('../controllers/trips');

// Protect all admin routes:
router.get('/trips', auth, tripsCtrl.tripsList);
router.get('/trips/:tripCode', auth, tripsCtrl.tripsFindByCode);
router.post('/trips', auth, tripsCtrl.tripsCreate);
router.put('/trips/:tripId', auth, tripsCtrl.tripsUpdate);
router.delete('/trips/:tripCode', auth, tripsCtrl.tripsDelete);

// Auth routes stay public
const ctrlAuth = require('../controllers/authentication');
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
