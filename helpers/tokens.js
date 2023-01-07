const Jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJWT = datos => {
    return Jwt.sign({ 
        id: datos.id,
        fullName: datos.fullName,
        phone: datos.phone,
        email: datos.email
    },
    process.env.JWT_KEY, {expiresIn: '1d'});
}
const generateId = () => {
    return Math.random().toString(32).substring(2) + Date.now().toString(32);
}

module.exports = {
    generateId,
    generateJWT
}