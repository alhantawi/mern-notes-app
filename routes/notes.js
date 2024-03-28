import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

    res.send("get all notes");
    
})

router.get("/:id", (req, res) => {
 res.send("get  single note");
})

router.post("/", (req, res) => {
    res.send("add new note");       
})

router.put("/:id", (req, res) => {
    res.send("update note");
})

export default router;

