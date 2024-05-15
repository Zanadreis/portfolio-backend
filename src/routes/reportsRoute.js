const express = require("express");
const route = express.Router();
const reportsServices = require("../services/reportsService");

route.post("/create-report", reportsServices.createReport);
route.get("/", reportsServices.getReports);

module.exports = route;
