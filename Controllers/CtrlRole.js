import {Role} from '../Models/Rlations.js';
import { validationResult } from 'express-validator';

// Ajouter un nouveau rôle
export const addRole = async (req, res) => {
    // Vérifier les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si des erreurs de validation sont présentes, retourner une réponse d'erreur
        return res.status(400).json({ errors: errors.array() });
    }

    // Si aucune erreur, continuer avec la logique d'ajout du rôle
    try {
        const { NomRole } = req.body;
        const newRole = await Role.create({ NomRole });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout du rôle", error: error.message });
    }
};

// Obtenir tous les rôles
export const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtenir un rôle par ID
export const getRoleById = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.status(200).send(role);
        } else {
            res.status(404).send({ message: 'Rôle non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un rôle
export const updateRole = async (req, res) => {
    // Vérifier les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si des erreurs de validation sont présentes, retourner une réponse d'erreur
        return res.status(400).json({ errors: errors.array() });
    }

    // Si aucune erreur, continuer avec la logique de mise à jour du rôle
    try {
        const { NomRole } = req.body;
        const roleId = req.params.id;

        // Chercher le rôle par son ID
        let role = await Role.findByPk(roleId);
        if (!role) {
            return res.status(404).json({ message: "Rôle non trouvé" });
        }

        // Mettre à jour le rôle avec les nouvelles valeurs
        role = await role.update({ NomRole });

        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour du rôle", error: error.message });
    }
};

// Supprimer un rôle
export const deleteRole = async (req, res) => {
    try {
        const deleted = await Role.destroy({
            where: { RoleID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Rôle non trouvé' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
