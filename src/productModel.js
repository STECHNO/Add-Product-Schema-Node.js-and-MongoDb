const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    id: String,
    size: String,
    price: Number,
    category: String,

});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;