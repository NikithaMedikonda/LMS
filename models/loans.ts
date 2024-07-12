import { DataTypes } from 'sequelize';
import sequelize from '../database';
import {Books} from './books';
import { Members} from './members';

export const Loans = sequelize.define('Loans', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Books,
            key: 'id'
        }
    },
    member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Members,
            key: 'id'
        }
    },
    loan_date: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps:false,
    tableName:'Loans'
    ,
    indexes: [
        {
            fields: ['member_id']
        }
    ]
});

