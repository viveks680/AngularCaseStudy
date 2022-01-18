const mongoose = require('mongoose')
const express = require('express')
const notesModel = require('./models/notesModel')

const notesRouter = require('./routes/notesRoutes')

const app = express()

app.use(express.json())
app.use(notesRouter)

mongoose.connect('mongodb://127.0.0.1:27017/teamCollab', ()=>{
    console.log('Database Connected');
})

app.listen(3000,()=>{
    console.log('Listening on http://localhost:3000')
})