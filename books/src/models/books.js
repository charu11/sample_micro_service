var mongoose = require('mongoose');
mongoose.Promise = global.Promise()
var Schema = mongoose.Schema

var BookSchema = Schema({
    bookName : {type: String, required: true, unique: false},
    author   : {type: String, required: true, unique:false}

});

module.exports = mongoose.model('Book', BookSchema);