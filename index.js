const express = require('express')
const app = express()
const port= 3000

const bodyParser= require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const indexRotes = require('./routes/index')
app.use('/',indexRotes)

app.listen(port,()=>{
    console.log('server listen on ',port)
})