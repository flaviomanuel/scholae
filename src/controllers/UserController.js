const knex = require("../database");

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('users');

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

            await knex('users').insert({
                name,
                email,
                password
            });

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