import express from 'express';
import { addMatiere, getAllMatieres, getMatiereById, updateMatiere, deleteMatiere } from '../Controllers/CtrlMatière.js';
import validateMatiere from "../Validation/ValidMatiere.js";

const router = express.Router();

router.post('/matieres', validateMatiere, addMatiere);
router.get('/matieres', getAllMatieres);
router.get('/matieres/:id', getMatiereById);
router.put('/matieres/:id', validateMatiere, updateMatiere);
router.delete('/matieres/:id', deleteMatiere);

export default router;
