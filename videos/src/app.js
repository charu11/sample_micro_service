var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Video = require ('./models/videos');

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.json({msg: 'videos'});
});

app.get('/videos', function(req, res){
    var videos = Video.find();
    res.json({videos});
});

app.post('/books', function(req, res){
    var video = new Video();
    video.name = req.body.name

    video.save(function(err, videos){
        if(err){
            console.log('error has occured', err);

        }else{
            console.log("success, video has been saved! ")
        }
    });
 });

 module.exports = app;