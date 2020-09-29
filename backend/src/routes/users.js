const {Router} = require('express');
const router = Router();

const { createUser, getUser, deleteUser } = require('../controllers/users.controllers')

router.route('/').get(getUser);

router.route('/').post(createUser);

router.route('/:id').delete(deleteUser);



module.exports = router;