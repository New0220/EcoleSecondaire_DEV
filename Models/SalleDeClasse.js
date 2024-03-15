import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const SalleDeClasse = database.define('SalleDeClasse', {
    SalleDeClasseID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NomSalle: { type: DataTypes.STRING, allowNull: false },
    Capacite: { type: DataTypes.INTEGER, allowNull: false }
});

export default SalleDeClasse;
