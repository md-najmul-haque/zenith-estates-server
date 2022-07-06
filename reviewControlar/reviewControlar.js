const mongoose = require('mongoose');
const reviewScheama = require('../model/reviewSchemea');
const Reviews = mongoose.model('review', reviewScheama);

exports.getReviews = async (req, res) => {
    try {
        const result = await Reviews.find({});
        res.send(result);

    }
    catch (error) {
        console.dir(error)
    }
}