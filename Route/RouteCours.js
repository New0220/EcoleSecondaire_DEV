import express from 'express';
import { addCours, getAllCours, getCoursById, updateCours, deleteCours } from '../Controllers/CtrlCours.js';
import validateCours from "../Validation/ValidCours.js"

const router = express.Router();

router.post('/cours', validateCours, addCours);
router.get('/cours', getAllCours);
router.get('/cours/:id', getCoursById);
router.put('/cours/:id', validateCours, updateCours);
router.delete('/cours/:id', deleteCours);

export default router;
