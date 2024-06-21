const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const connection = mongoose.connection

const Drivers = connection.model(
    'Drivers',
    new Schema(
        {
            name: { type: String },
            birthDate: { type: Date },
            email: { type: String },
            phone: { type: String },
            photo: { type: String },
            company: { type: Schema.Types.ObjectId, ref: 'Companies' }
        },
        { timestamps: true },
        { collection: 'Drivers' }
    )
);

module.exports = Drivers;