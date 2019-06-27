var express = require('express');
var bodyParser = require('body-parser');
var Book = require('./models/books');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.json({message: "books"});

});

app.get('/books', function(req, res){
    var books = Book.find({});
    res.json(books);

});

app.post('/books', function(req, res){
    var book = new Book();
    book.name = req.body.name

    book.save(function(err){
        if(err){
            console.log("error occured", err);

        }else{
            console.log("success")
            res.json({message: "succeeded"})
        }

    });
});

module.exports = app;