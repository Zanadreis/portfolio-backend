const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const connection = mongoose.connection

const Users = connection.model(
    'Users',
    new Schema(
        {
            name: { type: String, require },
            email: { type: String, require },
            password: { type: String, require },
            role: { type: String, require },
            company: { type: Schema.Types.ObjectId, ref: 'Companies', require }
        },
        { timestamps: true },
        { collection: 'Users' }
    )
)

module.exports = Users;