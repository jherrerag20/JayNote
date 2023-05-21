const notesCrtl = {};
const note = require('../models/note');

notesCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCrtl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new note({title , description })
    await newNote.save();
    req.flash('success_msg', 'Your note has been added successfully');
    res.redirect('/notes');
}; 

notesCrtl.renderNotes = async (req,res) => {
    const notes = await note.find();
    res.render('notes/all-notes', {notes});
};

notesCrtl.renderEditForm = async (req, res) => {
    const Note = await note.findById(req.params.id);
    console.log(Note)
    res.render('notes/edit-note', {Note});
};

notesCrtl.updateNote = async (req, res) => {
    const {title, description} = req.body;
    await note.findByIdAndUpdate(req.params.id, {title, description});
    console.log(req.param.id);   
    req.flash('success_msg', 'Your note has been updated successfully');
    res.redirect('/notes')
};

notesCrtl.deleteNote = async (req, res) => {
    await note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Your note has been deleted successfully');
    res.redirect('/notes')
}

module.exports = notesCrtl;