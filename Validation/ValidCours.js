// validations/coursValidation.js
import { body } from 'express-validator';

const validateCours = [
    body('NomCours').trim().isLength({ min: 3 }).withMessage('Le nom du cours doit contenir au moins 3 caractères.'),
    body('EnseignantID').isNumeric().withMessage('L\'ID de l\'enseignant doit être numérique.'),
    body('MatiereID').isNumeric().withMessage('L\'ID de la matière doit être numérique.')
];

export default  validateCours;