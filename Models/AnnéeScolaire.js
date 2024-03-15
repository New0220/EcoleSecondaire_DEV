import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const AnneeScolaire = database.define('AnneeScolaire', {
    AnneeScolaireID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    AnneeDebut: { type: DataTypes.INTEGER, allowNull: false },
    AnneeFin: { type: DataTypes.INTEGER, allowNull: false }
});

export default AnneeScolaire;
