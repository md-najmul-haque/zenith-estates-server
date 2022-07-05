const express = require('express');
const { getApartments } = require('../apartmentscontrolar/apartmentscontrolar');
const router = express.Router();
router.get('/apartments', getApartments)
module.exports = router;