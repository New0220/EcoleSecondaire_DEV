import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js"

const Enseignant = database.define('Enseignant', {
    EnseignantID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UtilisateurID: { type: DataTypes.INTEGER, references: { model: 'Utilisateur', key: 'UtilisateurID' }},
    Specialite: { type: DataTypes.STRING, allowNull: false }
});

export default Enseignant;
