const Drivers = require("../models/drivers");
const mongoose = require("../db/conn");

module.exports = class DriversRepository {
  static createDriver(driver) {
    return Drivers.create(driver);
  }

  static async getDrivers(_company) {
    console.log(_company);
    return Drivers.find({ company: new mongoose.Types.ObjectId(_company) });
  }
};