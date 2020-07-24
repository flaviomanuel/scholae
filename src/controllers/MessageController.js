const knex = require("../database");

module.exports = {
    async index(req, res, next) {
        try {

            const { page=1 } = req.query;

            const { id } = req.params;


            const classMsgs =  knex('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .join('messages', 'messages_classrooms.message_id', '=', 'messages.id')
                .join('users', 'messages.user_id', '=', 'users.id')
                .select('messages.*','messages_classrooms.classroom_id',
                 'classrooms.name', 'classrooms.nickname' , 'users.name')
                 .where('classrooms.id', id)
                .limit(10)
                .offset((page - 1) * 10);

            const [count] = await knex('messages').count();


            res.header('X-Total-Count', count.count)

            const results = await classMsgs;    

            //mudando o nome dos campes "name" e "nickname" do classroom para "classroomName" e "classroomNickname"
            const serializedClassMsgs = results.map(classMsg => {
                console.log(classMsg);
                return {
                    id: classMsg.id,
                    title: classMsg.title,
                    description: classMsg.description,
                    created_at: classMsg.created_at,
                    user_id: classMsg.user_id,
                    classroom_id: classMsg.classroom_id,
                    classroomName: classMsg.name.replace(' ', 'º '),
                    classroomNickname: classMsg.nickname.replace(' ', 'º '),
                    name: classMsg.name

                }
            })
            
            return res.json(
                serializedClassMsgs
            );

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
            //consulta das classrooms de message specific 
            const classroom = await knex('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .where('messages_classrooms.message_id', id)
                .select('classrooms.name');

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