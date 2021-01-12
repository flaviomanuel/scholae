const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
   
    const  authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ error: 'Token não informado'})
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send({ error: 'Erro no Token'})
    }
    
    const [scheme, token] = parts;

    if(!'Bearer' === scheme){
        return res.status(401).send({ error: 'Token malformatado'})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
         return res.status(401).send({ error: 'Token invalido'})    
        }

        req.userId = decoded.id;
        return next();
    })
}
