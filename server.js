import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import note from "./routes/notes.js";


dotenv.config({
    path: "./config/config.env",
});

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// primary route
app.use("/api/v1/notes", note);


app.listen(3001, () => {
    console.log("server is Up on  and running on port 3001");
});
