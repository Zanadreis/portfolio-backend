const express = require("express");
const route = express.Router();
const vehiclesServices = require("../services/vehiclesServices");

route.post("/vehicle", vehiclesServices.createVehicle);

module.exports = route;
