const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const kmsConnection = mongoose.connection

const Drivers = kmsConnection.model(
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