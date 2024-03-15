// validations/emploiDuTempsValidation.js
import { body } from 'express-validator';

const validateEmploiDuTemps = [
    body('CoursID').isNumeric().withMessage('L\'ID du cours doit être numérique.'),
    body('SalleDeClasseID').isNumeric().withMessage('L\'ID de la salle de classe doit être numérique.'),
    body('Jour').trim().isLength({ min: 1 }).withMessage('Le jour est requis.'),
    body('HeureDebut').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('L\'heure de début doit être au format HH:MM.'),
    body('HeureFin').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('L\'heure de fin doit être au format HH:MM.')
        .custom((value, { req }) => {
            if (value <= req.body.HeureDebut) {
                throw new Error('L\'heure de fin doit être postérieure à l\'heure de début.');
            }
            return true;
        }),
];

export default validateEmploiDuTemps;