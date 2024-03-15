import express from 'express';
import { addInscription, getAllInscriptions, getInscriptionById, updateInscription, deleteInscription } from '../Controllers/CtrlInscription.js';
import validateInscription from "../Validation/ValidInscription.js"

const router = express.Router();

router.post('/inscriptions', validateInscription, addInscription);
router.get('/inscriptions', getAllInscriptions);
router.get('/inscriptions/:id', getInscriptionById);
router.put('/inscriptions/:id', validateInscription, updateInscription);
router.delete('/inscriptions/:id', deleteInscription);

export default router;
