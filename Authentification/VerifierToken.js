// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const verifierToken = (req, res, next) => {
    // Récupération du token depuis le header Authorization
    const bearerToken = req.headers.authorization;

    // Vérification de la présence du token
    if (!bearerToken) {
        return res.status(401).json({ message: "Accès refusé. Vous n'êtes pas connecté!" });
    }

    // Extraction du token sans la partie 'Bearer '
    const token = bearerToken.split(' ')[1];

    // Vérification et décodage du token
    jwt.verify(token, process.env.CODE_SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token invalide ou expiré." });
        }

        // Sauvegarde de l'id utilisateur dans l'objet request pour une utilisation ultérieure
        req.utilisateurId = decoded.id;

        // Passage au middleware suivant ou à la fonction de route
        next();
    });
};
