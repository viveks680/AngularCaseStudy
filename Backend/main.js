const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const notesModel = require('./models/notesModel')

const notesRouter = require('./routes/notesRoutes')
const cookieParser = require('cookie-parser')

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

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if (req.method === 'OPTIONS') {
//         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
//         return res.status(200).json({});
//     };
//     next();
// });

app.use(notesRouter)
app.use(cookieParser)

mongoose.connect('mongodb://127.0.0.1:27017/teamCollab', ()=>{
    console.log('Database Connected');
})

app.listen(3000,()=>{
    console.log('Listening on http://localhost:3000')
})