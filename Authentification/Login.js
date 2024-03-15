// importation du modèle Utilisateur
import { Utilisateur } from "../Models/Rlations.js"; // Assurez-vous que le chemin d'importation est correct

// Importer bcrypt pour le hachage des mots de passe
import bcrypt from 'bcryptjs';

// Importer jwt pour la génération de tokens
import jwt from 'jsonwebtoken';

// Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    // Récupération des résultats de la validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Les informations de connexion
    const { Email, MotDePasse } = req.body;

    // Vérification de l'email
    if (!Email) {
        return res.status(404).json({ message: "L'email est incorrect" });
    }

    try {
        // Chercher l'utilisateur dans la base de données
        const utilisateur = await Utilisateur.findOne({ where: { Email } });

        // Vérifier la présence de cet utilisateur dans la base de données
        if (!utilisateur) {
            return res.status(404).json({ message: "L'utilisateur n'existe pas!" });
        }

        // Vérification du mot de passe
        const mdpCorrect = bcrypt.compareSync(MotDePasse, utilisateur.MotDePasse);
        if (!mdpCorrect) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // Création du token d'accès
        const payload = { id: utilisateur.id };
        const token = jwt.sign(payload, process.env.SECRET_KEY); // Assurez-vous d'avoir défini SECRET_KEY dans vos variables d'environnement

        res.status(200).json({ data: utilisateur, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
