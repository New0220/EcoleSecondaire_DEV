// validations/eleveValidation.js
import { body } from 'express-validator';

const validateEleve = [
    body('Nom').trim().isLength({ min: 2 }).withMessage('Le nom doit contenir au moins 2 caractères.'),
    body('Prenom').trim().isLength({ min: 2 }).withMessage('Le prénom doit contenir au moins 2 caractères.'),
    body('DateDeNaissance').isDate().withMessage('La date de naissance doit être une date valide.'),
    body('Adresse').trim().isLength({ min: 5 }).withMessage('L\'adresse doit contenir au moins 5 caractères.'),
    body('ClasseID').isNumeric().withMessage('L\'ID de la classe doit être numérique.')
];

export default validateEleve;