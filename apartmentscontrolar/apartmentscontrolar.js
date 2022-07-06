const mongoose = require('mongoose');
const apartmentsSchema = require('../model/apartmentsSchema');
const Apartments = mongoose.model('apartment', apartmentsSchema)
exports.getApartments = async (req, res) => {
    try {
        const result = await Apartments.find({})
        console.dir(result);
        res.send(result);
    }
    catch (error) { console.dir(error) }
}