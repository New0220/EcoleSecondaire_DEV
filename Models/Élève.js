import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Eleve = database.define('Eleve', {
    EleveID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //UtilisateurID: { type: DataTypes.INTEGER, references: { model: 'Utilisateur', key: 'UtilisateurID' }},
    DateDeNaissance: { type: DataTypes.DATEONLY, allowNull: false },
    Adresse: { type: DataTypes.STRING, allowNull: false },
    //ClasseID: { type: DataTypes.INTEGER, references: { model: 'Classe', key: 'ClasseID' }}
});

export default Eleve;
