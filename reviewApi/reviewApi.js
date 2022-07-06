const express = require('express');
const router = express.Router();

const { getReviews } = require('../reviewControlar/reviewControlar');
router.get('/reviews', getReviews)
module.exports = router;