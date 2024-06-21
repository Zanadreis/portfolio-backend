const express = require("express");
const route = express.Router();
const reportsController = require("../controllers/reportsController");

route.post("/create-report", reportsController.createReport);
route.get("/", reportsController.getReports);

module.exports = route;
