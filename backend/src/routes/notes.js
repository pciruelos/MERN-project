const {Router} = require('express');
const router = Router();

const { getNotes, createNotes, getNote, updateNote, deleteNote } = require('../controllers/notes.controllers');

router.route('/').get(getNotes);
router.route('/').post(createNotes);
router.route('/:id').get(getNote);
router.route('/:id').put(updateNote);
router.route('/:id').delete(deleteNote);


module.exports = router;