// Importer le modèle Sequelize correspondant
import { Eleve } from '../Models/Élève.js';
import { validationResult } from 'express-validator';

// Ajouter un élève
export const addEleve = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { Nom, Prenom, DateDeNaissance, Adresse, ClasseID } = req.body;
        // Création de l'élève avec les données validées
        const newEleve = await Eleve.create({ 
            Nom, 
            Prenom, 
            DateDeNaissance, 
            Adresse, 
            ClasseID 
        });

        res.status(201).json(newEleve);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'élève", error: error.message });
    }
};

// Récupérer tous les élèves
export async function getAllEleves(req, res) {
    try {
        const eleves = await Eleve.findAll();
        return res.status(200).send(eleves);
    } catch (error) {
        return res.status(400).send(error);
    }
}

// Récupérer un élève par ID
export async function getEleveById(req, res) {
    try {
        const eleve = await Eleve.findByPk(req.params.id);
        if (!eleve) {
            return res.status(404).send({ message: 'Élève non trouvé.' });
        }
        return res.status(200).send(eleve);
    } catch (error) {
        return res.status(400).send(error);
    }
}

// Mettre à jour un élève
export const updateEleve = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Retourner les erreurs s'il y en a
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let eleve = await Eleve.findByPk(id);

        if (!eleve) {
            return res.status(404).json({ message: "Élève non trouvé" });
        }

        const { Nom, Prenom, DateDeNaissance, Adresse, ClasseID } = req.body;
        // Mise à jour de l'élève avec les données validées
        eleve = await eleve.update({ 
            Nom, 
            Prenom, 
            DateDeNaissance, 
            Adresse, 
            ClasseID 
        });

        res.status(200).json(eleve);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'élève", error: error.message });
    }
};

// Supprimer un élève
export async function deleteEleve(req, res) {
    try {
        const deleted = await Eleve.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            return res.status(204).send("Élève supprimé.");
        }
        throw new Error('Élève non trouvé.');
    } catch (error) {
        return res.status(400).send(error);
    }
}
