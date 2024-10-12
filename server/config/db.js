const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI
            
        );
        console.log('MongoDB connected sucessfully =>');
    } catch (error) {
        console.error(" mongodb connection error =>",error.message);

        process.exit(1);
    }
};

module.exports = connectDB;
