require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {

    try {
        await mongoose.connect(mongoURI);
        console.log("connected Sucessfully!");
    }
    catch(err){
        console.log(err);
    }
}


module.exports = connectToMongo;