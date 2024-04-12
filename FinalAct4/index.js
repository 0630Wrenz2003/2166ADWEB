var Express = require('express')
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://Renz:Wrenz159@cluster0.amgrneo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// database name
var DATABASENAME = 'MyDb'

// instatiate mongodbclient
var database;


//listener
app.listen(5038, () => {
Mongoclient.connect(CONNECTION_STRING,(error, client) => {database=client.db(DATABASENAME);
console.log("Successfully Connected")})
});

app.get('/api/books/GetBooks', (req, res) => {
    database.collection('books').find({}).toArray((error, result) =>{
        res.send(result);
    })
})

app.post('/api/books/AddBook', multer().none(), async(req, res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            team: req.body.team,
            description: req.body.description
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book: ", error);
        res.status(500).json({ error: "Failed to add book"});
    }
})

app.delete('/api/books/DeleteBook', (req,res) => {
    database.collection("books").deleteOne({
        id:req.query.id
    });
    res.json("Delete successfully!");
})
