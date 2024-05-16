import express from "express";
import { getNotes, getNote, addNote, updateNote, deleteNote } from "../controllers/notes.js";
import { requireAuth } from "../middlewares/requireAuth.js";



const router = express.Router();

router.use(requireAuth);
router.route("/").get(getNotes).post(addNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);



export default router;

