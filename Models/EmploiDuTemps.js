import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const EmploiDuTemps = database.define('EmploiDuTemps', {
    EmploiDuTempsID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CoursID: { type: DataTypes.INTEGER, references: { model: 'Cours', key: 'CoursID' }},
    SalleDeClasseID: { type: DataTypes.INTEGER, references: { model: 'SalleDeClasse', key: 'SalleDeClasseID' }},
    Jour: { type: DataTypes.STRING, allowNull: false },
    HeureDebut: { type: DataTypes.TIME, allowNull: false },
    HeureFin: { type: DataTypes.TIME, allowNull: false }
});

export default EmploiDuTemps;
