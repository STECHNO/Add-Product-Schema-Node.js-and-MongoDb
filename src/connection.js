const mongoose = require('mongoose');
const addProduct = require('./addProduct')



mongoose.connect("mongodb+srv://admin:admin123456789@gangana.utjy4.mongodb.net/gangala-db?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
	.once('open', () => {
		console.log('Connection is Established.');
		addProduct();
	})
	.on('error', (err) => {
		console.log('Error: ', err);
	})