const { Router } = require('express');
const { invitedGet, invitedPost, invitedPut } = require('../controllers/invited')

const router = Router();

router.get('/', invitedGet);
router.post('/', invitedPost);
router.put('/:id', invitedPut)

module.exports = router;