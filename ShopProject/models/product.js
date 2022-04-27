const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	price: String,
	image: String,
	description : String
});

module.exports = mongoose.model('Product', productSchema);