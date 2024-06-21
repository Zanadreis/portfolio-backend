const mongoose = require("../db/conn");
const { Schema } = require("mongoose");

const connection = mongoose.connection;

const Companies = connection.model(
  "Companies",
  new Schema(
    {
      name: { type: String, require },
      cnpj: { type: String, require },
      address: {
        street: { type: String, require },
        number: { type: Number },
        neighborhood: { type: String },
        city: { type: String, require },
        state: { type: String, require },
        country: { type: String, require },
        zipCode: { type: String, require }
      },
      phone: { type: String },
      contacts: [
        {
          name: { type: String },
          email: { type: String },
          phone: { type: String },
          mobile: { type: String },
        }
      ]
    },
    { timestamps: true },
    { collection: "Companies" }
  )
);

module.exports = Companies;
