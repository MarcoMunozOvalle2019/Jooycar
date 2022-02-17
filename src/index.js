const express = require('express')
const app = express()
const port= 3000

const bodyParser= require('body-parser')


require('./database')

//***to test in local */
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/trip')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const indexRotes = require('./routes/index')
app.use('/',indexRotes)

app.listen(port,()=>{
    console.log('server listen on ',port)
})
