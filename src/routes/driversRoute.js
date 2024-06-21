const express = require("express");
const route = express.Router();
const driversController = require("../controllers/driversController");

route.post("/driver", driversController.createDriver);
route.get("/list", driversController.getDrivers);

module.exports = route;
