var app = require('.src/app');
var db = require('.src/config/index');
var mongoose = require('mongoose');
mongoose.connect(db)

var port = 3000;
app.listen(port, function(err){
    if(err){
        console.log("error occured while connecting to the port", err);
    }else{
        Console.log("success conection is made on port: 3000");

        
    }
})
