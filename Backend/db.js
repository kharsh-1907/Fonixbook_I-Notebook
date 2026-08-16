const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost/i-Notebook";

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