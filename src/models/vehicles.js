const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const kmsConnection = mongoose.connection

const Vehicles = kmsConnection.model(
    'Vehicles',
    new Schema(
        {
            type: { type: String },
            licensePlate: { type: String },
            year: { type: Number },
            company: { type: Schema.Types.ObjectId, ref: 'Companies' }
        },
        { timestamps: true },
        { collection: 'Vehicles' }
    )
);

module.exports = Vehicles;