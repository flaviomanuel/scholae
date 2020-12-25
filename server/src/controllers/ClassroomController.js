const knex = require("../database");

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('classrooms');

//adiciona o "º" no classroomName e classroomNickname
            const serializedClassroom = results.map(classroom => {
                return { 
                    id: classroom.id,
                    name: classroom.nickname.replace(' ', 'º '),
                }
            })
           

            return res.json(serializedClassroom);

        } catch (error) {
            next(error);
        }
    }
}