import { DataTypes } from 'sequelize';

import database from "../Config/Connexion.js";

const Role = database.define('Role', {
    RoleID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NomRole: { type: DataTypes.STRING, allowNull: false }
});

export default Role;
