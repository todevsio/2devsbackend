var jwt = require('jsonwebtoken');

exports.signIn = function (user) {
    return jwt.sign(
        { username: user.username, admin: user.admin },
        global.SALT_KEY,
        {
            expiresInMinutes: 1440 // Expira em 24 horas
        }
    );
};

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

exports.isAdmin = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Token Inválido'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.admin) {
                    next();
                } else {
                    res.status(401).json({
                        message: 'Você não tem permissão para esta funcionalidade'
                    });
                }
            }
        });
    }
};