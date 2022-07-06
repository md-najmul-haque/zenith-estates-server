const mongoose = require('mongoose');
const reviewScheama = mongoose.Schema({

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
        type: Number

    },
    rating: {
        require: true,
        type: number
    },
    date: {
        type: Date,
        default: Date.now()
    }
}
)



module.exports = reviewScheama;