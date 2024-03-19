import express from 'express';
import { addEmploiDuTemps, getAllEmploisDuTemps, getEmploiDuTempsById, updateEmploiDuTemps, deleteEmploiDuTemps } from '../Controllers/CtrlEmploiDuTemps.js';
import validateEmploiDuTemps from "../Validation/ValidEmploiDuTemps.js"; 

const router = express.Router();

router.post('/emploisDuTemps', validateEmploiDuTemps, addEmploiDuTemps);
router.get('/emploisDuTemps', getAllEmploisDuTemps);
router.get('/emploisDuTemps/:id', getEmploiDuTempsById);
router.put('/emploisDuTemps/:id', validateEmploiDuTemps, updateEmploiDuTemps);
router.delete('/emploisDuTemps/:id', deleteEmploiDuTemps);

export default router;
