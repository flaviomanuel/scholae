const { first } = require("../database");
const knex = require("../database");

module.exports = {
    async index(req, res, next) {
        try {

            const { page=1 } = req.query;

            const { id } = req.params;

            const trx = await knex.transaction();


            const classMsgs =  trx('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .join('messages', 'messages_classrooms.message_id', '=', 'messages.id')
                .join('users', 'messages.user_id', '=', 'users.id')
                .select('messages.*','messages_classrooms.classroom_id',
                 'classrooms.nickname', 'users.name')
                 .where('classrooms.id', id)
                .limit(10)
                .offset((page - 1) * 10);

            const [count] = await trx('messages').count();


            res.header('X-Total-Count', count.count)

            const results = await classMsgs;    
            //mudando o nome dos campes "name" e "nickname" do classroom para "classroomName" e "classroomNickname"
            const serializedClassMsgs = results.map(classMsg => {
                return {
                    id: classMsg.id,
                    title: classMsg.title,
                    description: classMsg.description,
                    created_at:  classMsg.created_at.toLocaleString('pt-BR').split(' ')[0],
                    user_id: classMsg.user_id,
                    classroom_id: classMsg.classroom_id,
                    nickname: classMsg.nickname.replace(' ', 'º '),
                    name: classMsg.name
                }
            })
            
            await trx.commit();

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

            const trx = await knex.transaction();


            const message = await trx('messages')
            .join('users', 'messages.user_id', '=', 'users.id')
            .first()
            .where('messages.id', id)
            .select('users.id','users.name', 'users.email', 'messages.*');  

            if (!message) {
                return res.status(400).json({
                    Message: 'Messagem não encontrada'
                });
            }

            const serializedMessage = {
                id: message.id,
                title: message.title,
                description: message.description,
                created_at: message.created_at.toLocaleString('pt-BR').split(' ')[0],
                user_id: message.user_id,
                name: message.name,
            }

            //consulta das classrooms de message specific 
            const classroom = await trx('classrooms')
                .join('messages_classrooms', 'classrooms.id', '=', 'messages_classrooms.classroom_id')
                .where('messages_classrooms.message_id', id)
                .select('classrooms.nickname');

            await trx.commit();

            return res.json({
                message: serializedMessage,
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


            const trx = await knex.transaction();
            
            const ids = await trx('messages').insert({
                title,
                description,
                user_id
            }).returning('id')


            const messsageClassroom = classrooms.map(classroom_id => {
                return {
                    classroom_id,
                    message_id: ids[0],
                };
            })
            await trx('messages_classrooms')
                .insert(messsageClassroom);

            await trx.commit();

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