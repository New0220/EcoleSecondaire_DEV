// validations/salleDeClasseValidation.js
import { body } from 'express-validator';

const validateSalleDeClasse = [
    body('NomSalle').trim().isLength({ min: 1 }).withMessage('Le nom de la salle est requis.'),
    body('Capacite').isInt({ min: 1 }).withMessage('La capacité doit être un nombre entier positif.')
];
export default  validateSalleDeClasse;
