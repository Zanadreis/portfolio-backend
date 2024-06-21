const express = require("express");
const route = express.Router();
const vehiclesController = require("../controllers/vehiclesController");

route.post("/vehicle", vehiclesController.createVehicle);

module.exports = route;
