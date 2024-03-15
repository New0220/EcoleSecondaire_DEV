import AnneeScolaire from '../Models/AnnéeScolaire.js';
import { validationResult } from 'express-validator';

export const addAnneeScolaire = async (req, res) => {
    // Extraction des erreurs de validation de la requête
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { AnneeDebut, AnneeFin } = req.body;
        const newAnneeScolaire = await AnneeScolaire.create({ AnneeDebut, AnneeFin });
        res.status(201).json(newAnneeScolaire);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de l'année scolaire", error: error.message });
    }
};

export const getAllAnneesScolaires = async (req, res) => {
    try {
        const anneesScolaires = await AnneeScolaire.findAll();
        res.status(200).send(anneesScolaires);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getAnneeScolaireById = async (req, res) => {
    try {
        const anneeScolaire = await AnneeScolaire.findByPk(req.params.id);
        if (anneeScolaire) {
            res.status(200).send(anneeScolaire);
        } else {
            res.status(404).send({ message: 'Année scolaire non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateAnneeScolaire = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    try {
        let anneeScolaire = await AnneeScolaire.findByPk(id);
        if (!anneeScolaire) {
            return res.status(404).json({ message: "Année scolaire non trouvée." });
        }

        const { AnneeDebut, AnneeFin } = req.body;
        anneeScolaire = await anneeScolaire.update({ AnneeDebut, AnneeFin });
        res.status(200).json(anneeScolaire);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'année scolaire", error: error.message });
    }
};

export const deleteAnneeScolaire = async (req, res) => {
    try {
        const deleted = await AnneeScolaire.destroy({
            where: { AnneeScolaireID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Année scolaire non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
