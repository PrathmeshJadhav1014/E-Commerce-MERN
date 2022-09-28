const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    mail:String,
    password:String,
    type:String,
    SName:String,
    address:String,
    mno:Number,
})

module.exports = mongoose.model('user',userSchema);