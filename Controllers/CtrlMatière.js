import Matiere from '../Models/Matière.js';
import { validationResult } from 'express-validator';

// Ajouter une nouvelle matière
export const addMatiere = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { NomMatiere } = req.body;
        const newMatiere = await Matiere.create({ NomMatiere });
        res.status(201).json(newMatiere);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la matière", error: error.message });
    }
};

// Obtenir toutes les matières
export const getAllMatieres = async (req, res) => {
    try {
        const matieres = await Matiere.findAll();
        res.status(200).send(matieres);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir une matière par ID
export const getMatiereById = async (req, res) => {
    try {
        const matiere = await Matiere.findByPk(req.params.id);
        if (matiere) {
            res.status(200).send(matiere);
        } else {
            res.status(404).send({ message: 'Matière non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour une matière
export const updateMatiere = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let matiere = await Matiere.findByPk(id);

        if (!matiere) {
            return res.status(404).json({ message: "Matière non trouvée" });
        }

        const { NomMatiere } = req.body;
        matiere = await matiere.update({ NomMatiere });

        res.status(200).json(matiere);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la matière", error: error.message });
    }
};

// Supprimer une matière
export const deleteMatiere = async (req, res) => {
    try {
        const deleted = await Matiere.destroy({
            where: { MatiereID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Matière non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
