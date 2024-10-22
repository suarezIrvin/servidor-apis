const pool = require('../config/connection');

const CommentsModel = {

    getAllComments: () => {
        return pool.execute(
            `
            SELECT c.Comentario_id, c.Usuario_id, c.Evento_id, c.Comentario, c.Fecha, u.Nombre AS Usuario_nombre
            FROM comentarios c
            JOIN usuarios u ON c.Usuario_id = u.Usuario_id
            `
        );
    },

    getCommentEvent: (evento_id, page = 1, limit = 10) => {
        const offset = (page - 1) * limit;
        return pool.execute(
            `
            SELECT c.Comentario_id, c.Usuario_id, c.Evento_id, c.Comentario, c.Fecha, u.Nombre AS Usuario_nombre
            FROM comentarios c
            JOIN usuarios u ON c.Usuario_id = u.Usuario_id
            WHERE c.Evento_id = ?
            LIMIT ? OFFSET ?
            `,
            [evento_id, parseInt(limit), parseInt(offset)]
        );
    },

    createComment: (evento_id, usuario_id, comentario, fecha) => {
        const query = `
            INSERT INTO comentarios (Evento_id, Usuario_id, Comentario, Fecha)
            VALUES (?, ?, ?, ?)
        `;
        const values = [evento_id, usuario_id, comentario, fecha];
        return pool.execute(query, values);
    },

    deleteComment: (comentario_id) => {
        const query = 'DELETE FROM comentarios WHERE Comentario_id = ?';
        return pool.execute(query, [comentario_id]);
    }
};

module.exports = CommentsModel;
