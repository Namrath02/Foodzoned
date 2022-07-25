const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	contactnumber:{
		type: String,
		required: false
	},
	age:{
		type: Number,
		required: false
	},
	batch:{
		type: String,
		required: false
	},
	walletmoney:{
		type: Number,
		required:false
	},
	vname: {
		type: String,
		required: false
	},
	vemail: {
		type: String,
		required: false
	},
	vshop:{
		type: String,
		required: false
	},
	vcontactnumber:{
		type: String,
		required: false
	},
	vopen:{
		type: String,
		required: false
	},
	vclose:{
		type: String,
		required: false
	}
});




const FoodSchema = new Schema({
	fname: {
		type: String,
		required: false
	},
	fprice:{
		type: Number,
		required: false
	},
	frating:{
		type: Number,
		required: false
	},
	ftype:{
		type: String,
		required: false
	},
	faddon:{
		type: String,
		required: false
	}
});

//module.exports = User = mongoose.model("Vendors", VendorSchema);
module.exports = User = mongoose.model("Foods", FoodSchema);
module.exports = User = mongoose.model("Users", UserSchema);
