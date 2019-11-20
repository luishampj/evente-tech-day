import express from 'express'
import mysql from 'mysql'
import Sequelize from 'sequelize';
//import sequelize from 'sequelize'
import sequelize from './db';



const Charla = sequelize.define('charla',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    nombre:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    tags:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    expositor_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    hora:{
        type: Sequelize.STRING,
        allowNull: false
    }},
    {
        timestamps:false,underscored: true
    });

export default Charla;




