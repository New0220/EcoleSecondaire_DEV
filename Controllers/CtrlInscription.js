import {Inscription} from '../Models/Rlations.js';
import { validationResult } from 'express-validator';

export const addInscription = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { EleveID, CoursID, AnneeScolaireID } = req.body;
        const newInscription = await Inscription.create({
            EleveID, CoursID, AnneeScolaireID
        });

        res.status(201).json(newInscription);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'inscription", error: error.message });
    }
};

export const getAllInscriptions = async (req, res) => {
    try {
        const inscriptions = await Inscription.findAll();
        res.status(200).send(inscriptions);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getInscriptionById = async (req, res) => {
    try {
        const inscription = await Inscription.findByPk(req.params.id);
        if (inscription) {
            res.status(200).send(inscription);
        } else {
            res.status(404).send({ message: 'Inscription non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateInscription = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let inscription = await Inscription.findByPk(id);

        if (!inscription) {
            return res.status(404).json({ message: "Inscription non trouvée" });
        }

        const { EleveID, CoursID, AnneeScolaireID } = req.body;
        inscription = await inscription.update({
            EleveID, CoursID, AnneeScolaireID
        });

        res.status(200).json(inscription);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'inscription", error: error.message });
    }
};


export const deleteInscription = async (req, res) => {
    try {
        const deleted = await Inscription.destroy({
            where: { InscriptionID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Inscription non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
