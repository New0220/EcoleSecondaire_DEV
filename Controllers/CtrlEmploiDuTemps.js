import EmploiDuTemps from '../Models/EmploiDuTemps.js';
import { validationResult } from 'express-validator';

export const addEmploiDuTemps = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { CoursID, SalleDeClasseID, Jour, HeureDebut, HeureFin } = req.body;
        // Création de l'emploi du temps avec les données validées
        const newEmploiDuTemps = await EmploiDuTemps.create({ 
            CoursID, 
            SalleDeClasseID, 
            Jour, 
            HeureDebut, 
            HeureFin 
        });

        res.status(201).json(newEmploiDuTemps);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'emploi du temps", error: error.message });
    }
};


export const getAllEmploisDuTemps = async (req, res) => {
    try {
        const emploisDuTemps = await EmploiDuTemps.findAll();
        res.status(200).send(emploisDuTemps);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getEmploiDuTempsById = async (req, res) => {
    try {
        const emploiDuTemps = await EmploiDuTemps.findByPk(req.params.id);
        if (emploiDuTemps) {
            res.status(200).send(emploiDuTemps);
        } else {
            res.status(404).send({ message: 'Emploi du temps non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateEmploiDuTemps = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    try {
        let emploiDuTemps = await EmploiDuTemps.findByPk(id);

        if (!emploiDuTemps) {
            return res.status(404).json({ message: "Emploi du temps non trouvé" });
        }

        const { CoursID, SalleDeClasseID, Jour, HeureDebut, HeureFin } = req.body;
        // Mise à jour de l'emploi du temps avec les données validées
        emploiDuTemps = await emploiDuTemps.update({ 
            CoursID, 
            SalleDeClasseID, 
            Jour, 
            HeureDebut, 
            HeureFin 
        });

        res.status(200).json(emploiDuTemps);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'emploi du temps", error: error.message });
    }
};

export const deleteEmploiDuTemps = async (req, res) => {
    try {
        const deleted = await EmploiDuTemps.destroy({
            where: { EmploiDuTempsID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Emploi du temps non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
