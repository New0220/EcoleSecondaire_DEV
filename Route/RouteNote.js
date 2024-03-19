import express from 'express';
import { addNote, getAllNotes, getNoteById, updateNote, deleteNote } from '../Controllers/CtrlNote.js';

import validateNote from "../Validation/ValidNotes.js";

const router = express.Router();

router.post('/notes', validateNote, addNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validateNote, updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
