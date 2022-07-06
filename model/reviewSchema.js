const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema({

    name: {
        require: true,
        type: String
    },
    feedback: {
        require: true,
        type: String
    },
    img: {
        require: true,
        type: String
    },
    country: {
        require: true,
        type: String

    },
    rating: {
        require: true,
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
}
)

module.exports = reviewSchema;
