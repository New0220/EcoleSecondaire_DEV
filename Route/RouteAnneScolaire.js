import express from 'express';
import { addAnneeScolaire, getAllAnneesScolaires, getAnneeScolaireById, updateAnneeScolaire, deleteAnneeScolaire } from '../Controllers/CtrlAnneeScolaire.js';
import validateAnneeScolaire from "../Validation/ValidAnneeScolaire.js";

const router = express.Router();

router.post('/anneesScolaires', validateAnneeScolaire, addAnneeScolaire);
router.get('/anneesScolaires', getAllAnneesScolaires);
router.get('/anneesScolaires/:id', getAnneeScolaireById);
router.put('/anneesScolaires/:id', validateAnneeScolaire, updateAnneeScolaire);
router.delete('/anneesScolaires/:id', deleteAnneeScolaire);

export default router;
