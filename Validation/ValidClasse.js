// validations/classeValidation.js
import { body } from 'express-validator';

const validateClasse = [
    body('NomClasse').trim().isLength({ min: 2 }).withMessage('Le nom de la classe doit contenir au moins 2 caractères.'),
    body('AnneeScolaireID').isNumeric().withMessage('L\'ID de l\'année scolaire doit être numérique.')
];

export default validateClasse;