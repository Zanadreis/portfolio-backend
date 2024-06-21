const mongoose = require("../db/conn");
const { Schema } = require("mongoose");

const connection = mongoose.connection;

const Reports = connection.model(
  "Reports",
  new Schema(
    {
      company: { type: Schema.Types.ObjectId, ref: "Companies" },
      drivers: [{ type: Schema.Types.ObjectId, ref: "Drivers" }],
      data: { type: Object }
    },
    { timestamps: true },
    { collection: "Reports" }
  )
);

module.exports = Reports;
