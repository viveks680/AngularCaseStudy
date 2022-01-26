const mongoose = require('mongoose')
require('dotenv').config({});
const express = require('express')
const notesModel = require('./models/notesModel')
const notesRouter = require('./routes/notesRoutes')
const authRoute = require('./routes/auth')
const bodyparser = require('body-parser');

const app = express()

app.use(express.json())

//cors middleware
options = {
    origin: 'http://localhost:4200',
    credentials: true
  }

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Application/JSON')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })
app.use(cors(options))

app.use(notesRouter)
app.use('/api/user', authRoute);
app.use(cookieParser)


mongoose.connect('mongodb://127.0.0.1:27017/teamCollab', ()=>{
    console.log('Database Connected');
})

app.listen(3000,()=>{
    console.log('Listening on http://localhost:3000')
})