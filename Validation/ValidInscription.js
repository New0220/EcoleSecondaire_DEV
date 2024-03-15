// validations/inscriptionValidation.js
import { body } from 'express-validator';

const validateInscription = [
    body('EleveID').isNumeric().withMessage('L\'ID de l\'élève doit être numérique.'),
    body('CoursID').isNumeric().withMessage('L\'ID du cours doit être numérique.'),
    body('AnneeScolaireID').isNumeric().withMessage('L\'ID de l\'année scolaire doit être numérique.')
];
export default validateInscription;
