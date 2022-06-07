const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000

// middlewear   
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lyxfj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const apartmentsCollection = client.db("zenith_estates").collection("apartments");
        const reviewsCollection = client.db("zenith_estates").collection("reviews");

        app.get('/apartments', async (req, res) => {
            const query = {};
            const result = await apartmentsCollection.find(query).toArray();
            res.send(result)
        })

        app.get('/reviews', async (req, res) => {
            const query = {};
            const result = await reviewsCollection.find(query).toArray()
            res.send(result)
        })
    }
    finally {

    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Zenith estates is running')
})

app.listen(port, console.dir('port is listening to', port))

