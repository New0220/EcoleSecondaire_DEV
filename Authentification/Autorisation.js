import { Utilisateur } from '../Models/Rlations.js';

const autoriser = roles => async (req, res, next) => {
    const id = req.userId;

    try {
        const utilisateur = await Utilisateur.findByPk(id);
        if (!utilisateur) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" });

        // Supposons que le rôle est stocké directement dans l'objet utilisateur
        // et que vous avez une colonne 'role' dans votre table Utilisateur
        const roleUtilisateur = utilisateur.role;

        if (!roleUtilisateur) return res.status(403).json({ message: "Pas autorisé à voir cette route !!" });

        if (roles.includes(roleUtilisateur.toLowerCase())) {
            next();
            return;
        } 
        else {
            return res.status(403).json({ message: "Vous n'êtes pas autorisés..." });
        }

    } catch (error) {
        res.status(403).json({ message: error.message });
    }
};

export default autoriser;
