
const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const MarcoSchema = Schema({

        id:{
            type: String,
           },

        start: {
            type:Object,
            properties: {
                description:{
                    type: String
                },
                time:{
                    type: Number
                },
                lat:{
                    type: Number
                },
                lon:{
                    type: Number
                },
                address:{
                    type: String
                },
            }
        },
        end:{
            type:Object,
            properties: {
                description:{
                    type: String
                },
                time:{
                    type: Number
                },
                lat:{
                    type: Number
                },
                lon:{
                    type: Number
                },
                address:{
                    type: String
                },
            }
        },
        
        distance: Number,

        duration: Number,
    
        overspeedsCount: Number,
        
        boundingBox:{	
            type: Array,
            properties: {

            type: Object,
            properties: {
                lat: {
                type: Number,
                },
                lon: {
                    type: Number,
                    },
                }
            }
        }

}, { toJSON:{
    virtuals:true,
    versionKey: false,
    transform: function (doc,ret){
        delete ret._id
        return ret
    }
}})

module.exports = mongoose.model('prueba', MarcoSchema)
