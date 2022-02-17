const { response } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Task = require('../models/task')
const ModuleError = require('../utils/module.error')


router.get('/api/trips/v1/getAll', async(req,res)=>{
  try{
      const data = await Task.find({})      
      res.status(200).json({'trips':data})   
   }
  catch(e){
      let moduleError = new ModuleError(e)
       res.status(422).json({error:moduleError})
       }    
})

router.get('/api/trips/v1', async(req,res)=>{
    const parametros = req.query    

    try{
        const data = await Task.find({
            'distance': { $gte: Number(parametros.distance_gte) },
            'start.time': { $gte: Number(parametros.start_gte), $lte: Number(parametros.start_lte) },
         })
         .sort({_id:1})
         .skip(Number(parametros.offset))
         .limit(Number(parametros.limit))
        
        res.status(200).json({'trips':data})   
                
     }
    catch(e){
        let moduleError = new ModuleError(e)
         res.status(422).json({error:moduleError})
         }    
})


router.post('/api/trips/v1', async(req,res)=>{
    let response
    try{
     const trip = new Task(req.body)
     response = await trip.save()
     res.status(200).json(response)
    }
    catch(e){
        let moduleError = new ModuleError(e)
        res.status(moduleError.statusCode).json(moduleError)
    }
})



router.get('/llenaDataBase', async(req,res)=>{
    const trips= [
        {
          "id": "5efc0d7da7076973f1515120",
          "start": {
            "time": 1642539928000,
            "lat": -33.580158,
            "lon": -70.567227,
            "address": "Avenida Apoquindo 291"
          },
          "end": {
            "time": 1642541428000,
            "lat": -33.580462,
            "lon": -70.567177,
            "address": "Avenida Grecia 1043"
          },
          "distance": 10.4,
          "duration": 1500000,
          "overspeedsCount": 2,
          "boundingBox": [
            {
              "lat": -33.580462,
              "lon": -70.567177
            },
            {
              "lat": -33.580432,
              "lon": -70.567147
            },
            {
              "lat": -33.580432,
              "lon": -70.567147
            },
            {
              "lat": -33.580433,
              "lon": -70.567144
            }
          ]
        },
        {
          "id": "5efc0d7da7076973f1515120",
          "start": {
            "time": 1642541528000,
            "lat": -33.543158,
            "lon": -70.553227,
            "address": "Avenida La Florida 923"
          },
          "end": {
            "time": 1642541828000,
            "lat": -33.580542,
            "lon": -70.554177,
            "address": "Avenida El Peñón 65"
          },
          "distance": 4.5,
          "duration": 300000,
          "overspeedsCount": 0,
          "boundingBox": [
            {
              "lat": -33.580462,
              "lon": -70.567177
            },
            {
              "lat": -33.580432,
              "lon": -70.567147
            },
            {
              "lat": -33.580432,
              "lon": -70.567147
            },
            {
              "lat": -33.580433,
              "lon": -70.567144
            }
          ]
        }
      ]
          
    await Task.insertMany(trips, function (err,res){
        if(err) throw err
    })

    res.status(200).json('filling out database')

})


module.exports = router