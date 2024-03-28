import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";


dotenv.config({
    path: "./config/config.env",
});

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3001, () => {
    console.log("server is Up on  and running on port 3001");
});
