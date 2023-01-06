const db = require('../../database/models/index');
const { User } = require('../../database/models');
const { generateId, generateJWT } = require('../../helpers/tokens.js');

module.exports = {
    registerRender: (req, res) => {
        // res.send(Object.keys(db));
        res.render('users/register', {errors: [], user: ''});
    },
    loginRender: (req, res) => {
        res.render('users/login', {errors: []});
    },
    profileRender: async ( req, res ) => {
        getUserInfo(req, res, 'users/userProfile')
    },
    userEditRender: async (req, res) => {
        getUserInfo(req, res, 'users/userEdit')
    },
    userCreate: async (req, res) => {
        const { firstName, lastName, email, password, phone } = req.body;
    
        // Verificar que el usuario no este en la base de datos
        const userExists = await User.findOne( { where : { email } })
        
        // Si ya existe el usuario, pedirle que entre a su cuenta
        if(userExists) {
            return res.render('users/login', {
                errors: {email: {msg: 'El correo ya está Registrado'}}, 
                user: {
                    email: email,
                }
            });
        }
    
        // Validaciones
        await check('firstName')
            .notEmpty()
            .withMessage('Debes escribir al menos un nombre').run(req)
        await check('lastName')
            .notEmpty()
            .withMessage('Debes escribir al menos un apellido').run(req)
        await check('email')
            .isEmail()
            .withMessage('Eso no parece un email').run(req)
        await check('password')
            .isLength({ min: 6 })
            .withMessage('La contraseña debe tener por lo menos 6 caracteres').run(req)
        await check('repassword')
            .equals(req.body.password)
            .withMessage('Las contraseñas deben ser iguales').run(req)
        await check('phone')
            .isLength({ min: 10 })
            .withMessage('El numero de telefono debe tener al menos 10 digitos').run(req)
        await check('termsAndConditions')
            .equals("on")
            .withMessage('Debes aceptar los términos y condiciones').run(req)
        
        // Mostrar errores y hacer la validacion
        let validationResult = validationResult(req)
    
        // res.send(validationResult.mapped())
        res.send(req.body)
    
        // Si hay información en la validación entonces mostrar errores
        if(!validationResult.isEmpty()) {
            return res.render('users/register', {
                errors: validationResult.mapped(),
                user: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phone: req.body.phone
                }
            })
        }
    
        // Almacenar un usuario
        await User.create({
            fullName,
            email,
            password,
            phone,
            token: generateId()
        })
        res.redirect('../users/login');
    }
}

const getUserInfo = async (req, res, pageToRender) => {
    const { _token } = req.cookies
    if(!_token) {
        return res.redirect('../users/login')
    }
    
    try {
        const decoded = Jwt.verify(_token, process.env.JWT_SECRET)
        const userId = await User.scope('eliminarPassword').findByPk(decoded.id)
    
        // Validar que el usuario y buscarlo en la base de datos
        const userInfo = await User.findByPk(userId.id);

        // res.send(userInfo.address)
        if(!userInfo.hasOwnProperty('address')) userInfo.address = "Sin definir";
        if(!userInfo.hasOwnProperty('gender')) userInfo.gender = "Sin definir";
        
        // res.send(userInfo);  
        return res.render(pageToRender, {userInfo})
    } catch (error) {
        return res.clearCookie('_token').redirect('../users/login')
    }
}

// const {check, validationResult} = require('express-validator');
// const bcrypt = require('bcrypt');
// // const db = require('../../config/db.js');
// const db = require('../../models/index.js');
// const User = require('../../models/User.js');

// const { Sequelize } = require('sequelize');

// const registerRender = (req, res) => res.render('users/register', {
//     errors: [],
//     usuario: ''
// });

// const loginRender = (req, res) => {
//     res.send('hola login')
//     // res.render('users/login', {errors: []});
// }

// const profileRender = async ( req, res ) => {
//     return getUserInfo(req, res, 'users/userProfile')
// }

// const editRender = async (req, res) => {
//     return getUserInfo(req, res, 'users/userEdit')
// }



// const userLogin = async (req, res) => {
//     // Validacion
//     await check('email').isEmail().withMessage('Debes ingresar una dirección de correo válida').run(req)
//     await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req)

//     let resultado = validationResult(req)

//     // res.send(req.body) // Debugging
//     // res.send(resultado.mapped()) // Debugging

//     // Enviar mensaje de error si existe
//     if(!resultado.isEmpty()){
//         return res.render('users/login', {
//             // errores: resultado.array(),
//             errors: resultado.mapped(),
//         })
//     }
    
//     // Comprobar si el usuario existe
//     const {email, password} = req.body;

//     const usuario = await User.findOne({where : {email}});

//     if(!usuario){
//         return res.render('users/login', {
//             errors: {email: {msg: 'El usuario no existe'}}
//         })
//     }

//     // Revisar el password
//     if(!usuario.verificarPassword(password)){
//         return res.render('users/login', {
//             errors: {password: {msg: 'La contraseña es incorrecta'}}
//         })
//     }

//     // Autenticar al usuario
//     const token = generarJWT({id: usuario.id, fullName: usuario.fullName, 
//         phone: usuario.phone, email: usuario.email});
    
//     // Almacenar en un cookie
//     return res.cookie('_token', token, {
//         httpOnly: true
//         // secure: true,
//         // sameSite: true
//     }).redirect('/')
// }

// const userEdit = async (req, res) => {
//     await User.update({

//     })
//     return res.redirect('../users/profile');
// }

// const logout = (req, res) => {
//     return res.clearCookie('_token').status(200).redirect('/');
// }

// module.exports = {
//     registerRender,
//     loginRender,
//     profileRender,
//     editRender,
//     userLogin,
//     userCreate,
//     userEdit,
//     logout
// };