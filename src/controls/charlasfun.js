import express from 'express'
import mysql from 'mysql'
import sequelize from '../routes/db';
import Charla from '../routes/charlascreate'




async function todasCharlas(req,res){
    console.log("entramos a ver todas las charlas");
    try{        
        const todascharlas = await Charla.findAll(); 
        return res.status(200).json({data:todascharlas});
    }catch(e){

    }
}




async function charlasOne(req,res){
    const {id}=req.params;
    console.log("entramos a ver todas la charla: ", id);
    try{
        const charlasone = await Charla.findOne({
            attributes:["id","nombre","tags","expositor_id", "hora"],
            where:{id}
        });
        return res.status(200).json({data:charlasone});
    }catch(e){
        console.log(err);
        return res.status(500).json({
            message: "ERROR - ",
        });
    }
}


export {todasCharlas, charlasOne};