const notesModel = require('../models/notesModel')

//1. localhost:3000/api/notes/
//GET
exports.getAllNotes = async (req, res) => {
    console.log("Fetching notes")
    const notes = await noteModel.find({})
    console.log(notes)
    res.status(200).json(notes)
}
//POST
exports.createNote = async (req, res) => {
    console.log(req.body)
    const note = await noteModel.create(req.body)
    console.log(note)
    res.status(200).json({"message": "note created"})
}


//2. localhost:3000/api/notes/important
//GET
exports.getImportantNotes = async (req, res) => {
    console.log("Fetching important notes")
    const notes = await noteModel.find({'important': true})
    console.log(notes)
    res.status(200).json(notes)
}


//3. localhost:3000/api/notes/note/:id
//GET
exports.getNote = async (req, res) => {
    console.log(req.params.id)
    const note = await noteModel.findById(req.params.id)
    res.status(200).json(note)
}

//PATCH
exports.patchNote = async (req, res) => {
    console.log("Updating note")
    const note = await noteModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({"message": "note updated"})
}

//DELETE
exports.deleteNote = async (req, res) => {
    console.log("Deleting note")
    const note = await noteModel.findByIdAndDelete(req.params.id)
    res.status(200).json({"message": "note deleted"})
}


//4. localhost:3000/api/notes/recent
//GET
exports.getRecentNotes = async (req, res) => {
    console.log("Fetching recent notes")
    const notes = await noteModel.find({}).sort({'dateCreated': -1}).limit(3)
    console.log(notes)
    res.status(200).json(notes)
}

//5. get notes from certain date
//localhost:3000/api/notes/date
//POST
exports.getNoteFromDate = async(req,res)=>{
    console.log("Fetching notes from date")
    const date = new Date(req.body.date)
    const notes = await notesModel.find({'dateCreated': {
        $gte: new Date(date).setHours(00, 00, 00), $lte: new Date(date).setHours(23, 59, 59)}
    })
    console.log(notes)
    res.status(200).json(notes)
}
