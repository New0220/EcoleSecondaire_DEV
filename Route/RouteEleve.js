import express from 'express';
import { addEleve, getAllEleves, getEleveById, updateEleve, deleteEleve } from '../Controllers/CtrlEleve.js';
import validateEleve from "../Validation/ValidEleve.js"

const router = express.Router();

router.post('/eleves', validateEleve, addEleve);
router.get('/eleves', getAllEleves);
router.get('/eleves/:id', getEleveById);
router.put('/eleves/:id', validateEleve, updateEleve);
router.delete('/eleves/:id', deleteEleve);

export default router;
