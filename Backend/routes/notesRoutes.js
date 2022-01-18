const notesController = require('../controllers/notesController')
const express = require('express')

const notesRouter = express.Router()

notesRouter.route('/api/notes').get(notesController.getAllNotes)
notesRouter.route('/api/notes').post(notesController.createNote)

notesRouter.route('/api/notes/note/:id').get(notesController.getNote)
notesRouter.route('/api/notes/note/:id').patch(notesController.patchNote)
notesRouter.route('/api/notes/note/:id').delete(notesController.deleteNote)

notesRouter.route('/api/notes/recent').get(notesController.getRecent)

notesRouter.route('/api/notes/important').get(notesController.getImpNotes)


notesRouter.route('/api/notes/date').post(notesController.getNoteFromDate)

module.exports = notesRouter
