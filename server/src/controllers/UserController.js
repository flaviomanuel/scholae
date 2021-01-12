const knex = require("../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

module.exports = {

    async index(req, res, next) {
        try {
            const results = await knex('users')
            .select('id', 'name', 'email' );

            return res.json(results);
        } catch (error) {
            next(error);
        }

    },
    async create(req, res, next) {
        try {
            const {
                name,
                email,
                password
            } = req.body;

            bcrypt.hash(password, 10)
            .then(hashedPassword => {
               return knex("users").insert({
                  name,
                  email,
                  password: hashedPassword
               })
               .catch(error => next(error))
            })
            

            return res.status(201).send();

        } catch (error) {
            next(error)
        }
    },    
    async authenticate(req, res, next){
        try {

        const { email, password } = req.body;

        const user = await knex('users')
        .where({ email }) 
        .first();
        
        if(!user){
            return res.status(401).send({ error: 'Email Invalido' })
        }
        else {
            bcrypt.compare(password, user.password).then( isAuthenticated => {
                if(!isAuthenticated){
                    return res.status(401).json({
                        error: 'Senha Invalido'
                    })
                } 
                    user.password = undefined;

                    const token = jwt.sign({ id: user.id}, authConfig.secret, {
                        expiresIn: 86400,
                    });

                    return res.json({user, token});
            })
        }
        
        
        }
        catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                name,
                email,
                password
            } = req.body;
            const {
                id
            } = req.params;

            await knex('users')
                .update({
                    name,
                    email,
                    password
                })
                .where({
                    id
                })

            return res.send();
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const {
                id
            } = req.params;

            await knex('users')
                .where({
                    id
                })
                .del();

            return res.send();
        } catch (error) {
            next(error);
        }
    }
}