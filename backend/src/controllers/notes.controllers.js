const notesCtrl = {};

const Notemodel = require('../models/notes');

notesCtrl.getNotes = async (req,res) =>{
    const notes = await Notemodel.find();
    res.json(notes)
};

notesCtrl.createNotes = async (req,res) => {
   const { titulo, contenido, autor, date} = req.body;
   const newNote = new Notemodel({
       titulo: titulo,
       contenido: contenido,
       autor: autor,
       date: date
   });
   await newNote.save();
   console.log(newNote);
   res.send('listorti');
};

notesCtrl.getNote = (req,res) => res.json('note one');

notesCtrl.updateNote = async (req,res) =>{
    const {titulo, autor, contenido} = req.body
   await Notemodel.findOneAndUpdate({_id: req.params.id}, {
        titulo,
        autor,
        contenido,
    });

    res.json('update note');
};

notesCtrl.deleteNote = async (req,res) => {
   await Notemodel.findByIdAndDelete(req.params.id);
    res.json({message: 'delete message'});
};



module.exports = notesCtrl;