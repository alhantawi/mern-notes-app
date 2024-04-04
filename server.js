import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import note from "./routes/notes.js";
import {connectDB } from "./config/db.js";

dotenv.config({
    path:"./config/config.env",
});

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// primary route
app.use("/api/v1/notes", note);


app.listen(3001, () => {
    try {
        console.log("Server running on port 3001");
        connectDB();
       
        console.log("connection to MongoDB successful");
    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit(1);
    }
});
