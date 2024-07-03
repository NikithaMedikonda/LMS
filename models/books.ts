import { Model,DataTypes } from 'sequelize';
import sequelize from '../database';
import {Authors} from './authors';

export const Books = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Authors,
            key: 'id'
        }
    },
    genre: {
        type: DataTypes.STRING(100)
    },
    isbn: {
        type: DataTypes.STRING(13),
        unique: true
    },
    publication_year: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    tableName:'Books'
});

