const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  uid: String,
  pname: String,
  price: Number,
  type: String,
  shop: String,
});

module.exports = mongoose.model("cart", cartSchema);
