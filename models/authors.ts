import { DataTypes } from "sequelize";
import sequelize from "../database"

export const Authors = sequelize.define('Authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birth_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps:false,
    tableName:'Authors'
});

