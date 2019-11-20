
import express from 'express'
import mysql from 'mysql'


var routerCharla = express.Router();

 var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'OR0308.mona',
   database: 'evento_tech_day',
   port:3306
 });


connection.connect();

    // Lista de charlas
routerCharla.get('/', (req, res) => {
        console.log("Entramos a VER Todas las charlas");
            connection.query('SELECT * FROM CHARLA' , function(err, rows, fields) {
            if (err) {
                res.send('Error '+err);
            } else {
                var charlas = []
                rows.forEach(c => {
                    charlas.push({
                        id: c.id,
                        name : c.nombre, 
                        hora: c.hora,
                        expositor: c.expositor_id
                    })
                });

                res.setHeader('Content-Type', 'application/json')
                res.send(JSON.stringify(charlas));
            }
        });
 })
 routerCharla.get('/:id', (req, res) => {
    console.log("entramos a ver la charla: ");
    var idCharla =req.params.id;
    console.log(req.params);
    console.log(idCharla);
    // var numerito =7;
    connection.query('SELECT * FROM CHARLA WHERE id =?',[idCharla] , function(err, rows, fields) {
       // connection.query('SELECT * FROM CHARLA' , function(err, rows, fields) {
        if (err) {
            res.send('Error '+err);
        } else {
            var charlas = []
            rows.forEach(c => {
                charlas.push({
                    id: c.id,
                    name : c.nombre, 
                    hora: c.hora,
                    expositor: c.expositor_id
                })
            });

            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(charlas));
        }
    });
})

    routerCharla.post('/', (req, res) =>{
    
    console.log("entramos a colocar una charla: ");
     var nombreCharla = req.body.nombre;
     var tagsCharla = req.body.tags;
    var expositorId =req.body.expoId;
    var horaCharla =req.body.hora;

    var params = [nombreCharla, tagsCharla, expositorId, horaCharla];

      connection.query('INSERT INTO CHARLA (nombre, tags, expositor_id, hora) VALUES (?,?,?,?)', params,  function(err, rows, fields) {
      
         if (err) {
             res.send('Error '+err);
         } else {
            
             //res.setHeader('Content-Type', 'application/json')
             res.send("REGISTRO");
         }
     });
         //TODO
         //res.send(JSON.stringify(charlas));
     })


     routerCharla.delete('/:id', (req, res) =>{
    
        console.log("entramos a borrar una charla: ");
        var charlaId = req.params.id;
         
        connection.query('DELETE FROM CHARLA WHERE id=?', charlaId,  function(err, rows, fields) {
          
             if (err) {
                 res.send('Error '+err);
             } else {
                
                 //res.setHeader('Content-Type', 'application/json')
                 res.send("Se ha eliminado una charla" );
             }
         });
             //TODO
             //res.send(JSON.stringify(charlas));
         })

         routerCharla.put('/:id', (req, res) =>{

            console.log("entramos a editar una charla: ");
            console.log(req.params.id);
    
            var charlaId = req.params.id;    
            var params = [req.body.nombre, req.body.expositor_id, req.body.hora, charlaId];
            console.log(params);
        
            connection.query('UPDATE CHARLA SET nombre=?, expositor_id=?, hora=? WHERE id=?', params,  function(err, rows, fields) {
              
                 if (err) {
                     res.send('Error '+err);
                 } else {
                    
                     //res.setHeader('Content-Type', 'application/json')
                     res.send("Se ha modificado una charla" );
                 }
             });
                 //TODO
                 //res.send(JSON.stringify(charlas));
    })




    routerCharla.put('/:id', (req, res) =>{
        res.send('Guardar charla')
    })

export default routerCharla;