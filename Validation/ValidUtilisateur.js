// validations/utilisateurValidation.js
import { body } from 'express-validator';

const validateUtilisateur = [
    body('Nom').trim().isLength({ min: 2 }).withMessage('Le nom doit contenir au moins 2 caractères.'),
    body('Prenom').trim().isLength({ min: 2 }).withMessage('Le prénom doit contenir au moins 2 caractères.'),
    body('Email').isEmail().withMessage('L\'email doit être une adresse email valide.').normalizeEmail(),
    body('MotDePasse').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères.'),
    body('RoleID').isNumeric().withMessage('L\'ID du rôle doit être numérique.')
];
export default validateUtilisateur;
