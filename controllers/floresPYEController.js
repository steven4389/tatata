'use strict'
var conversion = require('../Repository/conversion')
var moment = require('moment-timezone');
moment().format('MMMM Do YYYY, h:mm:ss a');

var floresPYE = require('../models/floresPYE');

var controller={

    create: function(req, res){
        console.log(req)
        // let date = moment().tz("America/Bogota").format('YYYY.MM.DD HH:mm');
        // date=conversion._getCadenaFecha(date);
        // console.log(date)

        var FloresPYE = new floresPYE();

        var params = req.body;
        FloresPYE.fecha=params.fecha
        FloresPYE.plagayenfermedad= params.plagayenfermedad;
        FloresPYE.variedad= params.variedad;
        FloresPYE.sitio= parseInt(params.sitio);
        FloresPYE.cama= parseInt(params.cama);
        FloresPYE.lote= parseInt(params.lote);
        FloresPYE.empresa= params.empresa;
        FloresPYE.sede= params.sede;
        if(params.individuos){
            FloresPYE.individuos= parseInt(params.individuos);
        }
        
        
        console.log(FloresPYE)

        FloresPYE.save((err, FloresPYEStored)=>{
            if(err)return res.status(500).send({message: 'error en la peticion'});
            if(!FloresPYEStored) return res.status(404).send({message: 'no se ha podido guardar'});

            return res.status(200).send({FloresPYE: FloresPYEStored});
        });
    },

    

    obtener: function(req, res){
        
        //console.log(date)
        floresPYE.find({})
              .exec((err, flores)=> {
                    if(err) return res.status(500).send({message: 'error al devolver los datos'});
                    if(!flores) return res.status(404).send({message:'No hay insumos'});
                    
                    return res.status(200).send({flores});
                });
    },

    consulta: function(req, res){
        
        floresPYE.find({'empresa': req.query.empresa, 'sede': req.query.sede})
                 .where('fecha').gt(req.query.dateBefore).lt(req.query.dateAfter)
                  .exec((err, floresC)=> {console.log(floresC)
                        if(err) return res.status(500).send({message: 'error al devolver los datos'});
                        if(!floresC) return res.status(404).send({message:'No hay floresCorte'});
                        return res.status(200).send({floresC});
                   });
    },


    _consulta: function(req, res){
        console.log("estamos en la consulta")
        console.log(req.query.empresa)
        
        let fecha= req.query.fecha.substr(0,8)
        
        
        console.log("query",req.query)
        if(req.query.desdeCama !=''  && req.query.hastaCama !='' ){console.log("ahora ya no estamos alla sino aca")
            let desdeCama= parseInt(req.query.desdeCama)
            let hastaCama= parseInt(req.query.hastaCama)
            let lote= parseInt(req.query.lote)
            
            console.log("una", desdeCama)
            console.log("dos", hastaCama)
            floresPYE.find({'empresa': req.query.empresa, 'sede': req.query.sede, 'lote':lote, 
                            'plagayenfermedad': req.query.plagayenfermedad, 'fecha': {'$regex': fecha} })
                        .where('cama').gt(desdeCama).lt(hastaCama)    
                        .exec((err, floresC)=> {console.log(floresC)
            if(err) return res.status(500).send({message: 'error al devolver los datos'});
            if(!floresC) return res.status(404).send({message:'No hay floresCorte'});
               return res.status(200).send({floresC});
             });
        }else{console.log("por aca estamos")
            let lote= parseInt(req.query.lote)
            floresPYE.find({'empresa': req.query.empresa, 'sede': req.query.sede, 'lote': lote, 
                            'plagayenfermedad': req.query.plagayenfermedad, 'fecha': {'$regex': fecha} })
                        //.where('fecha').gt(req.query.dateBefore).lt(req.query.dateAfter)
                      //.where('cama').gt(desdeCama).lt(hastaCama)    
                      .exec((err, floresC)=> {console.log(floresC)
            if(err) return res.status(500).send({message: 'error al devolver los datos'});
            if(!floresC) return res.status(404).send({message:'No hay floresCorte'});
            return res.status(200).send({floresC});
            });
        }
       
    }


};

module.exports = controller;
