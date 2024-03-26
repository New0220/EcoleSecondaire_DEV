import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js"

const Inscription = database.define('Inscription', {
    InscriptionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //EleveID: { type: DataTypes.INTEGER, references: { model: 'Eleve', key: 'EleveID' }},
    //CoursID: { type: DataTypes.INTEGER, references: { model: 'Cours', key: 'CoursID' }},
    //AnneeScolaireID: { type: DataTypes.INTEGER, references: { model: 'AnneeScolaire', key: 'AnneeScolaireID' }}
});

export default Inscription;
