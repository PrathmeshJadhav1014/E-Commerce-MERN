const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   pname:String,
   price:Number,
   type:String,
   shop:String,
   pdetails:String,
   sname:String,

})

module.exports = mongoose.model('product',productSchema);