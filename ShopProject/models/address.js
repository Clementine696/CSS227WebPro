const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String
	},	
    houseaddress: String,
    sub_district: String,
    district: String,
    province: String,
    zipcode: String
});

module.exports = mongoose.model('Address', addressSchema);