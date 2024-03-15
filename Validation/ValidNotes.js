// validations/noteValidation.js
import { body } from 'express-validator';

const validateNote = [
    body('EleveID').isNumeric().withMessage('L\'ID de l\'élève doit être numérique.'),
    body('CoursID').isNumeric().withMessage('L\'ID du cours doit être numérique.'),
    body('Valeur').isFloat({ min: 0, max: 20 }).withMessage('La valeur de la note doit être comprise entre 0 et 20.')
];
export default validateNote;
