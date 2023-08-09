const express = require('express');
const router = express.Router();
const bookingappcontroller = require('../controller/bookingapp');

router.get('/', bookingappcontroller.getIndex);

router.post('/user', bookingappcontroller.addUser);

router.get('/js/main.js',bookingappcontroller.getjs);

module.exports = router;