const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000

const mongoose = require('mongoose');
const apartmentsApi = require('./apartmentsApi/apartmentsApi')
const reviewApi = require('./reviewApi/reviewApi')

// middleware 
app.use(cors())
app.use(express.json())

const run = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lyxfj.mongodb.net/zenith_estates?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(() => {
            console.log('connection success')
        })
    } catch (error) {
        console.log(error)
    }

}

run()

app.use('/apartments', apartmentsApi)
app.use('/reviews', reviewApi)

app.get('/', async (req, res) => {
    res.send('Server running')
})

// listening server 
app.listen(port, () => {
    console.log('Server running on', port)
})