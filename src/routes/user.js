const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const userController = require('../controllers/userController');

const storage =  multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join('public','img','uploads'))
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage:storage})
/* definir si se valida la imagen con multer o con expv */

router.get('/register', userController.registerRender);
router.get('/login', userController.loginRender);
router.get('/profile', userController.profileRender);
router.get('/edit', userController.userEditRender);

router.post('/register', userController.userCreate);
router.post('/login', userController.userLogin);
// router.post('/editInfo', userEdit);
router.post('/logout', userController.logout);

module.exports = router;