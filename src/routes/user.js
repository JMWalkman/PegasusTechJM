const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/register', userController.registerRender);
router.get('/login', userController.loginRender);
router.get('/profile', userController.profileRender);
router.get('/edit', userController.userEditRender);

// router.post('/login', userLogin);
// router.post('/register', userController.userCreate);
// router.post('/editInfo', userEdit);
// router.post('/logout', logout);

module.exports = router;