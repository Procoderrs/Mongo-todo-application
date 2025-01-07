const mongoose = require("mongoose");

const connectDB = () => {
	mongoose
		.connect(
			"mongodb+srv://zeenatzeni0112:todoapplication@cluster0.pfbtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
		)
		.then(() => console.log("connected to mongo db"))
		.catch((err) => console.log("could not connect to mongo db", err));
};

module.exports = connectDB;