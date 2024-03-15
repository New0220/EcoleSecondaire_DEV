// validations/anneeScolaireValidation.js
import { body } from 'express-validator';

const validateAnneeScolaire = [
    body('AnneeDebut').isNumeric().withMessage('L\'année de début doit être un nombre.').isLength({ min: 4, max: 4 }).withMessage('L\'année de début doit être composée de 4 chiffres.'),
    body('AnneeFin').isNumeric().withMessage('L\'année de fin doit être un nombre.').isLength({ min: 4, max: 4 }).withMessage('L\'année de fin doit être composée de 4 chiffres.')
        .custom((value, { req }) => {
            if (value <= req.body.AnneeDebut) {
                throw new Error('L\'année de fin doit être supérieure à l\'année de début.');
            }
            return true;
        }),
];

export default validateAnneeScolaire;
