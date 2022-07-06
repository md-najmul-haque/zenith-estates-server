const express = require('express');
const router = express.Router();

const { getApartments } = require('../apartmentscontrolar/apartmentscontrolar');

//get all the apartments
router.get('/apartments', getApartments)
module.exports = router;