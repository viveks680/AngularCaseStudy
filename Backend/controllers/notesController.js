const notesModel = require('../models/notesModel')

//1. localhost:3000/api/notes/
//post
exports.createNote = (req, res) =>{
    console.log(req.body)
    notesModel.create(req.body)
    res.status('200').json(req.body)
}
//get
exports.getAllNotes = async(req, res)=>{
    const notes = await notesModel.find().all()
    res.status('200').json(notes)
}


//2. localhost:3000/api/notes/important
//get
exports.getImpNotes = async(req, res)=>{
    const notes = await notesModel.find({'important': true})
    res.status('200').json(notes)
}

//3. localhost:3000/api/notes/note/:id
//get
exports.getNote = async(req, res)=>{
    const note = await notesModel.findById(req.params.id)
    res.status('200').json(note)
}
//patch
exports.patchNote = async(req, res)=>{
    const note = await notesModel.findByIdAndUpdate(req.params.id, {$set:
        {'title': req.body.title, 
        'body':req.body.body, 
        'important':req.body.important, 
        'dateCreated':req.body.dateCreated}},
        {new:true})
    res.status('200').json(note)

    //old
    /*const note = await notesModel.updateOne({_id: req.params.id, {$set:
        {'title': req.body.title, 
        'body':req.body.body, 
        'important':req.body.important, 
        'dateCreated':req.body.dateCreated}}*/

}
//delete
exports.deleteNote = async(req, res)=>{
    const note = await notesModel.deleteOne({'_id':req.params.id})
    res.status('200').json(note)
}

//4. Get 3 most recent notes: get you can use .sort() and .limit()
//localhost:3000/api/notes/recent
exports.getRecent = async(req, res)=>{
    const notes = await notesModel.find().sort({'dateCreated': -1}).limit(3)
    res.status('200').json(notes)
}

//5. get notes from certain date
//localhost:3000/api/notes/date
exports.getNoteFromDate = async(req,res)=>{
    const startOfday = new Date(new Date(req.body.date).setUTCHours(0,0,0)) //setHours is based on local time zone
    const endOfDay = new Date(new Date(req.body.date).setUTCHours(23,59,59)) //setUTCHours should be better. I think. Or use setHours(+18,0,0) or something
    //console.log(startOfday)
    //console.log(endOfDay)
    //console.log(req.body.date)
    //const notes = await notesModel.find({'dateCreated': req.body.dateCreated})
    const notes = await notesModel.find({'dateCreated': {$gte: startOfday, $lte: endOfDay}})
    res.status('200').json(notes)
}