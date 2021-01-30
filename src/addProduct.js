const Product = require('./productModel');


function addProduct() {

console.log('adding product');

const product = new Product({
    name: 'Jeans',
    id: '001',
    size: 'Medium',
    price: 3000,
    category: 'Mens"s" Cloth',
});
product.save()
    .then(() => console.log('saved user'))
    .catch((err) => console.log('Err ', err));
}

module.exports = addProduct;