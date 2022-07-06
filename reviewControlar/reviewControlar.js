const mongoose = require('mongoose');
const reviewSchema = require('../model/reviewSchema');
const Reviews = mongoose.model('review', reviewSchema);

exports.getReviews = async (req, res) => {
    try {
        const result = await Reviews.find({});
        console.dir(result);
        res.send(result);

    }
    catch (error) {
        console.dir(error)
    }
}