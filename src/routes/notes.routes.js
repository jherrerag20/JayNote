const {Router} = require('express')
const router = Router();

const {renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote} = require('../controllers/notes.controller');
const { routes, response } = require('../server');

// New note
router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createNewNote);

//Get ´em all
router.get('/notes', renderNotes);

//Update notes
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

// Delete notes
router.delete('/notes/delete/:id', deleteNote);

module.exports = router