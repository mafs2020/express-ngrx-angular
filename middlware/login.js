const jwt = require('jsonwebtoken');

isLogin = async (req, res, next) => {
    const { token } = req.headers;
    try {
        const decoded = jwt.verify(token, 'shhhhh');
        next();
    } catch(err) {
        res.status(401).json({ok:false, err, msj: 'ocurrio un error con el token'});
    }

};

module.exports = { isLogin }