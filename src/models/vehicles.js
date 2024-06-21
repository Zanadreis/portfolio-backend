const mongoose = require('../db/conn');
const { Schema } = require('mongoose');

const connection = mongoose.connection

const Vehicles = connection.model(
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