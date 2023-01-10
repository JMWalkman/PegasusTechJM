const { User } = require('../../database/models');
const { uploadsPath } = require('../../public/js/filePaths');

async function cookieAuth (req, res, next) {
    res.locals.isLogged = false //agregamos la variable isLogged a locals  
    const {_token} = req.cookies
    
    if(_token) {
        const { userId, userEmail } = _token;
        // return res.send(_token)
        const userInfo = await User.findOne({ 
            where: {
                id: userId,
                email: userEmail
            }
        })
        userInfo.password = null;
        userInfo.profile_image = uploadsPath + '/users/' + userInfo.profile_image;

        if (userInfo) {
            res.locals.isLogged = true;

            res.locals.userName = userInfo.first_name;
            res.locals.userImage = userInfo.profile_image;
        }
    }
    // res.send(req.session)
    next()
}

module.exports = cookieAuth;