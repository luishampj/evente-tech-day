import express from 'express'
import mysql from 'mysql'
//import sequelize from 'sequelize'
//import sequelize from './db';
import {todasCharlas, charlasOne} from '../controls/charlasfun'


var routerCharla=express.Router();

routerCharla.get('/', todasCharlas);
routerCharla.get('/:id', charlasOne);


export default routerCharla




