var mongoose = require('mongoose')
mongoose.Promise = global.Promise();
var Schema = mongoose.Schema

var VideoSchema = Schema({
    name: {type:String, reqiuired: true, unique: false},
    type:{type: String, default: "video"},
    createdAt : {type:Date, default: Date.now}
});

module.exports = mongoose.model('Video', VideoSchema);