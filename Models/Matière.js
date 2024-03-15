import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Matiere = database.define('Matiere', {
    MatiereID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NomMatiere: { type: DataTypes.STRING, allowNull: false }
});

export default Matiere;
