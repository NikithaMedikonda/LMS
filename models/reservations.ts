import { Model,DataTypes } from 'sequelize';
import sequelize from '../database';
import {Books} from './books';
import {Members} from './members';

export const Reservations = sequelize.define('Reservations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Books,
            key: 'id'
        }
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Members,
            key: 'id'
        }
    },
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps:false,
    tableName:'Reservations'
});


