const mongoose = require("mongoose");


const connectDB = async (callback)=>{
    const URL = "mongodb://admin:1234@localhost:27017";
    try {
        await mongoose.connect(URL);
        console.log("connected to database <3");
        callback();
    } catch (error) {
        console.error("Can not connect to database </3");
        console.error(error.message);
    }
}



module.exports = {connectDB}