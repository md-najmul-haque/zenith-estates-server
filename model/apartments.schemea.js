const mongoose = require('mongoose');
const apartmentsSchema = mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    description: {
        require: true,
        type: String
    },
    img: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: Number

    },
    date: {
        type: Date,
        default: Date.now()
    }
}
)



module.exports = apartmentsSchema