// validations/validationLogin.js
import { body } from 'express-validator';

const loginRules = [
    body('Email').isEmail().withMessage('Veuillez entrer un email valide.'),
    body('MotDePasse').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères.')
];

export default loginRules;
