import express from 'express';
import { addEnseignant, getAllEnseignants, getEnseignantById, updateEnseignant, deleteEnseignant } from '../Controllers/CtrlEnseignant';
import validateEnseignant from "../Validation/ValidEnseignant.js"

const router = express.Router();

router.post('/enseignants', validateEnseignant, addEnseignant);
router.get('/enseignants', getAllEnseignants);
router.get('/enseignants/:id', getEnseignantById);
router.put('/enseignants/:id', validateEnseignant, updateEnseignant);
router.delete('/enseignants/:id', deleteEnseignant);

export default router;
