const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
            const conn= await mongoose.connect(process.env.DB_URL); 
            console.log("Database connected successfully");
        
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
};

module.exports = connectDatabase;
