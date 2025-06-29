const express = require('express');
const router = express.Router();

// Controllers
const ctrlAuth = require('../controllers/authentication');
const auth = require('../controllers/auth.middleware');
const tripsCtrl = require('../controllers/trips');

// Public routes
router.get('/trips', tripsCtrl.tripsList);
router.get('/trips/:tripCode', tripsCtrl.tripsFindByCode);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Protected routes (require JWT)
router.post('/trips', auth, tripsCtrl.tripsCreate);
router.put('/trips/:tripCode', auth, tripsCtrl.tripsUpdate);
router.delete('/trips/:tripCode', auth, tripsCtrl.tripsDelete);

module.exports = router;
