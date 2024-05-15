const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const kmsConnection = mongoose.connection

const Users = kmsConnection.model(
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