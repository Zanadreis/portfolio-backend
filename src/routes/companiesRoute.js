const express = require("express");
const route = express.Router();
const companiesController = require("../controllers/companiesController");

route.post("/company", companiesController.createCompany);

module.exports = route;
