import {Enseignant} from '../Models/Rlations.js';
import { validationResult } from 'express-validator';

// Ajouter un nouvel enseignant
export const addEnseignant = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { UtilisateurID, Specialite } = req.body;
        // Création de l'enseignant avec les données validées
        const newEnseignant = await Enseignant.create({ 
            UtilisateurID, 
            Specialite 
        });

        res.status(201).json(newEnseignant);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'enseignant", error: error.message });
    }
};

// Obtenir tous les enseignants
export const getAllEnseignants = async (req, res) => {
    try {
        const enseignants = await Enseignant.findAll();
        res.status(200).send(enseignants);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir un enseignant par ID
export const getEnseignantById = async (req, res) => {
    try {
        const enseignant = await Enseignant.findByPk(req.params.id);
        if (enseignant) {
            res.status(200).send(enseignant);
        } else {
            res.status(404).send({ message: 'Enseignant non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un enseignant
export const updateEnseignant = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let enseignant = await Enseignant.findByPk(id);

        if (!enseignant) {
            return res.status(404).json({ message: "Enseignant non trouvé" });
        }

        const { UtilisateurID, Specialite } = req.body;
        // Mise à jour de l'enseignant avec les données validées
        enseignant = await enseignant.update({ 
            UtilisateurID, 
            Specialite 
        });

        res.status(200).json(enseignant);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'enseignant", error: error.message });
    }
};

// Supprimer un enseignant
export const deleteEnseignant = async (req, res) => {
    try {
        const deleted = await Enseignant.destroy({
            where: { EnseignantID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Enseignant non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
