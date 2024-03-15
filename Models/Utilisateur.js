import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Utilisateur = database.define('Utilisateur', {
    UtilisateurID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom: { type: DataTypes.STRING, allowNull: false },
    Prenom: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    MotDePasse: { type: DataTypes.STRING, allowNull: false },
    RoleID: { type: DataTypes.INTEGER, references: { model: 'Roles', key: 'RoleID' }}
});

export default Utilisateur;
