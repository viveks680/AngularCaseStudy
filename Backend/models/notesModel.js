const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    body:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        required: true,
        default: new Date()
    },
    important:{
        type: Boolean,
        default: false
    }
})

const notesModel = mongoose.model('note', notesSchema,'notes')
module.exports = notesModel