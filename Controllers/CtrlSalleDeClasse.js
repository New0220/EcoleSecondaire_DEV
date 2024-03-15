import SalleDeClasse from '../Models/SalleDeClasse.js';
import { validationResult } from 'express-validator';

export const addSalleDeClasse = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { NomSalle, Capacite } = req.body;
        const newSalleDeClasse = await SalleDeClasse.create({ NomSalle, Capacite });
        res.status(201).json(newSalleDeClasse);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la salle de classe", error: error.message });
    }
};

export const getAllSallesDeClasse = async (req, res) => {
    try {
        const salles = await SalleDeClasse.findAll();
        res.status(200).send(salles);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getSalleDeClasseById = async (req, res) => {
    try {
        const salle = await SalleDeClasse.findByPk(req.params.id);
        if (salle) {
            res.status(200).send(salle);
        } else {
            res.status(404).send({ message: 'Salle de classe non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateSalleDeClasse = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let salleDeClasse = await SalleDeClasse.findByPk(id);

        if (!salleDeClasse) {
            return res.status(404).json({ message: "Salle de classe non trouvée" });
        }

        const { NomSalle, Capacite } = req.body;
        salleDeClasse = await salleDeClasse.update({ NomSalle, Capacite });

        res.status(200).json(salleDeClasse);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la salle de classe", error: error.message });
    }
};

export const deleteSalleDeClasse = async (req, res) => {
    try {
        const deleted = await SalleDeClasse.destroy({
            where: { SalleDeClasseID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Salle de classe non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
