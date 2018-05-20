const express = require('express');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongodb').then(connection => {

    console.log(connection);
});

let app = express();


app.get('/', (request, response) => {

    response.json({
         hello: 'world3'
    });
});

app.listen(3000);
