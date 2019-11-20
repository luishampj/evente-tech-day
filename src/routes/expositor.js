
import express from 'express'
import mysql from 'mysql'

var routerExpositor = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'OR0308.mona',
  database: 'evento_tech_day',
  port:3306
});
connection.connect();

    // Lista de charlas
routerExpositor.get('/', (req, res) => {
        console.log("Entramos a Todas los ESPOSITORES");
            connection.query('SELECT * FROM EXPOSITOR' , function(err, rows, fields) {
            if (err) {
                res.send('Error '+err);
            } else {
                var expositores = []
                rows.forEach(e => {
                    expositores.push({
                        id: e.id,
                        name : e.nombre, 
                        correo: e.correo,
                        github: e.cuenta_github
                    })
                });

                res.setHeader('Content-Type', 'application/json')
                res.send(JSON.stringify(expositores));
            }
        });
 })
 routerExpositor.get('/:id', (req, res) => {
    console.log("entramos a VER al Expositor :");
    var idExpositor =req.params.id;
    console.log(idExpositor);
    // var numerito =7;
    connection.query('SELECT * FROM EXPOSITOR WHERE id =?',[idExpositor] , function(err, rows, fields) {
        if (err) {
            res.send('Error '+err);
        } else {
            var expositores = []
            rows.forEach(e => {
                expositores.push({
                    id: e.id,
                    name : e.nombre, 
                    correo: e.correo,
                    github: e.cuenta_github
                })
            });

            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(expositores));
        }
    });
})




routerExpositor.post('/', (req, res) =>{
    
    console.log("entramos a colocar un expositor: ");
     
    var params = [req.body.nombre, req.body.correo, req.body.cuenta_github];

    connection.query('INSERT INTO EXPOSITOR (nombre, correo, cuenta_github) VALUES (?,?,?)', params,  function(err, rows, fields) {
      
         if (err) {
             res.send('Error '+err);
         } else {
            
             //res.setHeader('Content-Type', 'application/json')
             res.send("Se ha registrado un expositor" );
         }
     });
         //TODO
         //res.send(JSON.stringify(charlas));
     })


     routerExpositor.delete('/:id', (req, res) =>{
    
        console.log("entramos a borrar un expositor: ");
        var expoId = req.params.id;
         
        connection.query('DELETE FROM EXPOSITOR WHERE id=?', expoId,  function(err, rows, fields) {
          
             if (err) {
                 res.send('Error '+err);
             } else {
                
                 //res.setHeader('Content-Type', 'application/json')
                 res.send("Se ha eliminado un expositor" );
             }
         });
             //TODO
             //res.send(JSON.stringify(charlas));
         })



 

    routerExpositor.put('/:id', (req, res) =>{

        console.log("entramos a editar un expositor: ");
        console.log(req.params.id);

        var expoId = req.params.id;    
        var params = [req.body.nombre, req.body.correo, req.body.cuenta_github, expoId];
        console.log(params);
    
        connection.query('UPDATE EXPOSITOR SET nombre=?, correo=?, cuenta_github=? WHERE id=?', params,  function(err, rows, fields) {
          
             if (err) {
                 res.send('Error '+err);
             } else {
                
                 //res.setHeader('Content-Type', 'application/json')
                 res.send("Se ha modificado un expositor" );
             }
         });
             //TODO
             //res.send(JSON.stringify(charlas));
})

export default routerExpositor;