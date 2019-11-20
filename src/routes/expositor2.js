import express from 'express'
import mysql from 'mysql'
//import sequelize from 'sequelize'
//import sequelize from './db';
import {todosExpos, expositorOne} from '../controls/expositorfun'


var routerExpositor=express.Router();

routerExpositor.get('/', todosExpos);
routerExpositor.get('/:id', expositorOne);


export default routerExpositor
