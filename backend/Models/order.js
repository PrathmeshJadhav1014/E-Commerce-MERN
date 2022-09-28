const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  uid: String,
  pname: String,
  price: Number,
  type: String,
  date: Date,
  status: String,
  shop: String,
});

module.exports = mongoose.model("order", orderSchema);
