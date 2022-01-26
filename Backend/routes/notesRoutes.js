const notesController = require('../controllers/notesController')
const express = require('express')

const notesRouter = express.Router()

// note access points
notesRouter.route('/api/:user/notes')
    .get(notesController.getAllNotes)
    .post(notesController.createNote)

notesRouter.route('/api/:user/notes/note/:id')
    .get(notesController.getNote)
    .patch(notesController.patchNote)
    .delete(notesController.deleteNote)

notesRouter.route('/api/:user/notes/recent')
    .get(notesController.getRecentNotes)

notesRouter.route('/api/:user/notes/important')
    .get(notesController.getImportantNotes)


notesRouter.route('/api/:user/notes/date')
    .post(notesController.getNoteFromDate)

module.exports = notesRouter
