const notesModel = require('../models/notesModel')
const userModel = require('../models/user')

//1. localhost:3000/api/:user/notes/
//GET
exports.getAllNotes = async (req, res) => {
    console.log("Fetching notes for ${req.params.user}")
    //find notes with user = req.params.user
    const notes = await notesModel.find({'user': req.params.user})
    console.log(notes)
    res.status(200).json(notes)
}
//POST
exports.createNote = async (req, res) => {
    console.log(req.body)
    const note = await notesModel.create(req.body)
    //modify note to add user to its user array
    await notesModel.findByIdAndUpdate(note._id, {$push: {'user': req.params.user}})
    //add note to user's notes array
    await userModel.findByIdAndUpdate(req.params.user, {$push: {'notes': note._id}})
    console.log(note)
    res.status(200).json({"message": "note created"})
}


//2. localhost:3000/api/:user/notes/important
//GET
exports.getImportantNotes = async (req, res) => {
    console.log("Fetching important notes")
    //find notes with important = true and with user = req.params.user
    const notes = await notesModel.find({'important': true, 'user': req.params.user})
    console.log(notes)
    res.status(200).json(notes)
}


//3. localhost:3000/api/:user/notes/note/:id
//GET
exports.getNote = async (req, res) => {
    console.log(req.params.id)
    const note = await notesModel.findById(req.params.id)
    res.status(200).json(note)
}

//PATCH
exports.patchNote = async (req, res) => {
    console.log("Updating note")
    const note = await notesModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({"message": "note updated"})
}

//DELETE
exports.deleteNote = async (req, res) => {
    console.log("Deleting note")
    const note = await notesModel.findByIdAndDelete(req.params.id)
    res.status(200).json({"message": "note deleted"})
}


//4. localhost:3000/api/:user/notes/recent
//GET
exports.getRecentNotes = async (req, res) => {
    console.log("Fetching recent notes")
    const notes = await notesModel.find({'user': req.params.user}).sort({'dateCreated': -1}).limit(3)
    console.log(notes)
    res.status(200).json(notes)
}

//5. get notes from certain date
//localhost:3000/api/:user/notes/date
//POST
exports.getNoteFromDate = async(req,res)=>{
    console.log("Fetching notes from date")
    const date = new Date(req.body.date)
    //find notes with dateCreated = date and with user = req.params.user
    const notes = await notesModel.find({'dateCreated': {
        $gte: new Date(date).setHours(00, 00, 00), $lte: new Date(date).setHours(23, 59, 59)},
        'user': req.params.user})
    console.log(notes)
    res.status(200).json(notes)
}
