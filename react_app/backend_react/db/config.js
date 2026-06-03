// db/config.js
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Track the connection state
let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("🔄 Reusing existing MongoDB connection");
        return;
    }

    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing from environment variables!");
        }

        const db = await mongoose.connect(process.env.MONGO_URI);
        
        // Mongoose connection states: 1 = connected
        isConnected = db.connections[0].readyState === 1;
        console.log("🚀 Fresh connection to MongoDB Atlas established!");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        // In serverless, don't hard crash the process, let the function throw an error
        throw error; 
    }
};

module.exports = connectDB;