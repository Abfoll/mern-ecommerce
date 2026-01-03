require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

// 1. Middlewares
server.use(express.json());
server.use(cors({
    origin: process.env.ORIGIN, 
    credentials: true
}));

// 2. Database Connection
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
    }
};
connectToDB();

// 3. Routes
server.get("/", (req, res) => {
    res.status(200).json({ message: "running" });
});

// 4. Export for Vercel
module.exports = server;

// 5. Local Development Only
if (process.env.NODE_ENV !== 'production') {
    const PORT = 8000;
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}