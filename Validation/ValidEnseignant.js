// validations/enseignantValidation.js
import { body } from 'express-validator';

const validateEnseignant = [
    body('UtilisateurID').isNumeric().withMessage('L\'ID de l\'utilisateur doit être numérique.'),
    body('Specialite').trim().isLength({ min: 2 }).withMessage('La spécialité doit contenir au moins 2 caractères.')
];

export default  validateEnseignant;
