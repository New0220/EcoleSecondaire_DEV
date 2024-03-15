import Cours from '../Models/Cours.js';
import { validationResult } from 'express-validator';

// Ajouter un nouveau cours
export const addCours = async (req, res) => {
    // Vérifier s'il y a des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Si tout est valide, procéder à l'ajout du cours
        const cours = await Cours.create(req.body);
        res.status(201).json(cours);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du cours", error: error.message });
    }
};

// Obtenir tous les cours
export const getAllCours = async (req, res) => {
    try {
        const cours = await Cours.findAll();
        res.status(200).send(cours);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir un cours par ID
export const getCoursById = async (req, res) => {
    try {
        const cours = await Cours.findByPk(req.params.id);
        if (cours) {
            res.status(200).send(cours);
        } else {
            res.status(404).send({ message: 'Cours non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un cours
export const updateCours = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    try {
        // Trouver le cours à mettre à jour
        let cours = await Cours.findByPk(id);
        if (!cours) {
            return res.status(404).json({ message: "Cours non trouvé." });
        }

        // Mise à jour avec les nouvelles données
        cours = await cours.update(req.body);
        res.status(200).json(cours);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour du cours", error: error.message });
    }
};

// Supprimer un cours
export const deleteCours = async (req, res) => {
    try {
        const deleted = await Cours.destroy({
            where: { CoursID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Cours non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
