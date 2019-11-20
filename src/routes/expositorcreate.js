import express from 'express'
import mysql from 'mysql'
import sequelize from 'sequelize'
import sequelize from './db';


const Expositores = sequelize.define('expositor',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    nombre:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    correo:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    cuenta_github:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }},
    {
        timestamps:false,underscored: true
    });

export default Expositores;
