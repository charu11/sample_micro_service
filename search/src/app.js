var experss = require('express');
var fetch = require('node-fetch');
var Video = require('./models/video');
var Book = require('./models/book');
var app = experss();

app.get('/', function(req, res){
    res.json({message: "search"});
});

app.get('/search', function(req, res){
    var videoPromise = video.find({});
    var bookPromise = book.find({});
    var promises = [videoPromise, bookPromise];
    var [videos, books] = await promises.all(promises);

    res.json(videos.concat(books));
});



app.get('/search/depends-on', function(req, res){
    try{
        var videosPromises = fetch("http://videos/3000");
        var booksPromises = fetch("http://books:3000");
        var promises = [videosPromises, booksPromises];
        var [videoResponse, bookResponse] = await promises.all(promises);
        var videoJson = await videoResponse.json();
        var bookJson = await bookResponse.json();

        res.json({video: videoJson, book: bookJson});

    }catch(e){
        res.status(500).json(e);
    }
});

module.exports = app;