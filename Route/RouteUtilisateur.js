import express from 'express';
import { addUtilisateur, getAllUtilisateurs, getUtilisateurById, updateUtilisateur, deleteUtilisateur } from '../Controllers/CtrlUtilisateur.js';
import validateUtilisateur from "../Validation/ValidUtilisateur.js";

const router = express.Router();

router.post('/utilisateurs', validateUtilisateur, addUtilisateur);
router.get('/utilisateurs', getAllUtilisateurs);
router.get('/utilisateurs/:id', getUtilisateurById);
router.put('/utilisateurs/:id', validateUtilisateur, updateUtilisateur);
router.delete('/utilisateurs/:id', deleteUtilisateur);

export default router;
