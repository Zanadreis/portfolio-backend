const express = require("express");
const route = express.Router();
const companiesServices = require("../services/companiesServices");

route.post("/company", companiesServices.createCompany);

module.exports = route;
