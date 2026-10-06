import mongoose from "mongoose";

const connection = {};

async function connectDb() {
    // Agar pehle se connected hai toh dobara connect mat karo
    if (connection.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

export default connectDb;