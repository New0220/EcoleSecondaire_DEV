import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Classe = database.define('Classe', {
    ClasseID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NomClasse: { type: DataTypes.STRING, allowNull: false },
    //AnneeScolaireID: { type: DataTypes.INTEGER, references: { model: 'AnneeScolaire', key: 'AnneeScolaireID' }}
});

export default Classe;
