const knex = require("../database");
const bcrypt = require('bcrypt');

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('users')
            .select('name', 'email' );

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