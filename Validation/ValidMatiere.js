// validations/matiereValidation.js
import { body } from 'express-validator';

const validateMatiere = [
    body('NomMatiere').trim().isLength({ min: 3 }).withMessage('Le nom de la matière doit contenir au moins 3 caractères.')
];
export default validateMatiere;
