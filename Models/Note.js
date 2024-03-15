import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Note = database.define('Note', {
    NoteID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    EleveID: { type: DataTypes.INTEGER, references: { model: 'Eleve', key: 'EleveID' }},
    CoursID: { type: DataTypes.INTEGER, references: { model: 'Cours', key: 'CoursID' }},
    Valeur: { type: DataTypes.FLOAT, allowNull: false }
});

export default Note;
