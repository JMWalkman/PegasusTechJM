const express = require('express');
const {body} = require('express-validator')//validaciones del form
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productController = require('../controllers/productController');

const storage =  multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join('public','img','uploads'))
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage:storage})/* definir si se valida la imagen con multer o con expv */

router.get('/', productController.shopRender);
router.get('/productDetail/:id', productController.productDetailRender);
router.get('/productRegister/:id', productController.productRegisterRender);
router.get('/productEdit/:id', productController.productEditRender);

// router.post('/productRegister', upload.array('imagen'), productController.productCreate); //guarda los datos enviados en el form
// router.post('/productEdit/:id', productController.productEdit);
// router.get('/productDelete/:id', productController.productDeleteRender)
// router.post('/productDelete/:id', productController.deleteProduct);

module.exports = router;