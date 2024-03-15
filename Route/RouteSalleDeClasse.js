import express from 'express';
import { addSalleDeClasse, getAllSallesDeClasse, getSalleDeClasseById, updateSalleDeClasse, deleteSalleDeClasse } from '../Controllers/CtrlSalleDeClasse.js';
import validateSalleDeClasse from "../Validation/ValidSalleDeClasse.js"

const router = express.Router();

router.post('/sallesDeClasse', validateSalleDeClasse, addSalleDeClasse);
router.get('/sallesDeClasse', getAllSallesDeClasse);
router.get('/sallesDeClasse/:id', getSalleDeClasseById);
router.put('/sallesDeClasse/:id', validateSalleDeClasse, updateSalleDeClasse);
router.delete('/sallesDeClasse/:id', deleteSalleDeClasse);

export default router;
