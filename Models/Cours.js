import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Cours = database.define('Cours', {
    CoursID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NomCours: { type: DataTypes.STRING, allowNull: false },
    //EnseignantID: { type: DataTypes.INTEGER, references: { model: 'Enseignant', key: 'EnseignantID' }},
    //MatiereID: { type: DataTypes.INTEGER, references: { model: 'Matiere', key: 'MatiereID' }}
});

export default Cours;
