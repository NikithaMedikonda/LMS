import { DataTypes } from 'sequelize';
import sequelize from '../database';

export const Members = sequelize.define('Members', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps:false,
    tableName: 'Members'
    ,
    indexes: [
        {
            fields: ['email']
        }
    ]
});

