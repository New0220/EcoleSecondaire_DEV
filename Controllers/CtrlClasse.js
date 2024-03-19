import {Classe} from '../Models/Rlations.js';
import { validationResult } from 'express-validator';

// Ajouter une nouvelle classe
export const addClasse = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { NomClasse, AnneeScolaireID } = req.body;
        const newClasse = await Classe.create({ NomClasse, AnneeScolaireID });
        res.status(201).json(newClasse);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la classe", error: error.message });
    }
};

// Obtenir toutes les classes
export const getAllClasses = async (req, res) => {
    try {
        const classes = await Classe.findAll();
        res.status(200).send(classes);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir une classe par ID
export const getClasseById = async (req, res) => {
    try {
        const classe = await Classe.findByPk(req.params.id);
        if (classe) {
            res.status(200).send(classe);
        } else {
            res.status(404).send({ message: 'Classe non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour une classe
export const updateClasse = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    try {
        let classe = await Classe.findByPk(id);
        if (!classe) {
            return res.status(404).json({ message: "Classe non trouvée" });
        }

        const { NomClasse, AnneeScolaireID } = req.body;
        classe = await classe.update({ NomClasse, AnneeScolaireID });
        res.status(200).json(classe);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la classe", error: error.message });
    }
};

// Supprimer une classe
export const deleteClasse = async (req, res) => {
    try {
        const deleted = await Classe.destroy({
            where: { ClasseID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Classe non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
