// validations/roleValidation.js
import { body } from 'express-validator';

const validateRole = [
    body('NomRole').trim().isLength({ min: 3, max: 255 }).withMessage('Le nom du rôle doit contenir entre 3 et 255 caractères.'),
];

export default validateRole;
