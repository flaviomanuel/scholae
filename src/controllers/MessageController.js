const knex = require("../database");

module.exports = {
    async index(req, res, next) {
        try {

            const { page=1 } = req.query;
            
            const classroom =  knex('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .join('messages', 'messages_classrooms.message_id', '=', 'messages.id')
                .select('messages.*', 'classrooms.classroomName')
                .limit(10)
                .offset((page - 1) * 10);;

            const [count] = await knex('messages').count();
            console.log(count);

            res.header('X-Total-Count', count.count)

            const results = await classroom;

            return res.json({
                results
            });

        } catch (error) {
            next(error);
        }
    },
    async show(req, res, next) {
        try {
            const {
                id
            } = req.params;

            const message = await knex('messages').where({
                id
            }).first();

            if (!message) {
                return res.status(400).json({
                    Message: 'Messagem não encontrada'
                });
            }
            //consulta
            const classroom = await knex('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .where('messages_classrooms.message_id', id)
                .select('classroomName');

            return res.json({
                message,
                classroom
            });

        } catch (error) {
            next(error);
        }
    },
    async create(req, res, next) {
        try {

            const {
                title,
                description,
                user_id,
                classrooms,
            } = req.body;

            const ids = await knex('messages').insert({
                title,
                description,
                user_id
            }).returning('id').then(console.log('Cadastrado!'));

            console.log(ids[0]);

            const messsageClassroom = classrooms.map(classroom_id => {
                return {
                    classroom_id,
                    message_id: ids[0],
                };
            })
            console.log(messsageClassroom);
            await knex('messages_classrooms')
                .insert(messsageClassroom);

            return res.status(201).send();

        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const {
                id
            } = req.params;
            const {
                title,
                description,
                user_id
            } = req.body;

            await knex('messages')
                .update({
                    title,
                    description,
                    user_id
                })
                .where({
                    id
                });

            return res.send();

        } catch (error) {
            next(error);
        }
    },
    async delete(req, res, next) {
        try {
            const {
                id
            } = req.params;

            await knex('messages')
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