import express from 'express';
import { addClasse, getAllClasses, getClasseById, updateClasse, deleteClasse } from '../Controllers/CtrlClasse.js';
import validateClasse from "../Validation/ValidClasse.js";

const router = express.Router();

router.post('/classes', validateClasse, addClasse);
router.get('/classes', getAllClasses);
router.get('/classes/:id', getClasseById);
router.put('/classes/:id', validateClasse, updateClasse);
router.delete('/classes/:id', deleteClasse);

export default router;
