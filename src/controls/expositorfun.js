import express from 'express'
import mysql from 'mysql'
import sequelize from '../routes/db';
import Charla from '../routes/charlascreate'




async function todosExpos(req,res){
    console.log("entramos a ver todas los Expositores");
    try{        
        const todosexpos = await Charla.findAll(); 
        return res.status(200).json({data:todosexpos});
    }catch(e){

    }
}




async function expositorOne(req,res){
    const {id}=req.params;
    console.log("entramos a ver el expositor: ", id);
    try{
        const expositorone= await Charla.findOne({
            attributes:["id","nombre","tags","expositor_id", "hora"],
            where:{id}
        });
        return res.status(200).json({data:expositorone});
    }catch(e){
        console.log(err);
        return res.status(500).json({
            message: "ERROR - ",
        });
    }
}


export {todosExpos, expositorOne};