import Utilisateur from '../Models/Utilisateurs.js';
import { validationResult } from 'express-validator';

//Importer le module de hachage
import bcrypt from 'bcryptjs'

// Ajouter un nouvel utilisateur
export const addUtilisateur = async (req, res) => {
    try {
        const { Nom, Prenom, Email, MotDePasse, RoleID } = req.body;

        // Hachage du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(MotDePasse, salt);

        // Création de l'utilisateur avec le mot de passe haché
        const newUtilisateur = await Utilisateur.create({
            Nom,
            Prenom,
            Email,
            MotDePasse: hashedPassword,
            RoleID
        });

        res.status(201).json(newUtilisateur);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
    }
};

// Obtenir tous les utilisateurs
export const getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.status(200).send(utilisateurs);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir un utilisateur par ID
export const getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (utilisateur) {
            res.status(200).send(utilisateur);
        } else {
            res.status(404).send({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un utilisateur
export const updateUtilisateur = async (req, res) => {
    const { id } = req.params;
    const { MotDePasse } = req.body;

    try {
        let utilisateur = await Utilisateur.findByPk(id);

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Hachage du nouveau mot de passe si fourni
        let updatedFields = req.body;
        if (MotDePasse) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.MotDePasse = await bcrypt.hash(MotDePasse, salt);
        }

        // Mise à jour de l'utilisateur
        utilisateur = await utilisateur.update(updatedFields);

        res.status(200).json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur", error: error.message });
    }
};

// Supprimer un utilisateur
export const deleteUtilisateur = async (req, res) => {
    try {
        const deleted = await Utilisateur.destroy({
            where: { UtilisateurID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
