const express = require("express");
const route = express.Router();
const driversServices = require("../services/driversServices");

route.post("/driver", driversServices.createDriver);
route.get("/list", driversServices.getDrivers);

module.exports = route;
