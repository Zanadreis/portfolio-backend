const DriversRepository = require("../repository/driversRepository");

module.exports = class createServices {

  static async getDrivers(req, res) {
    const { _company } = req.query;
    const drivers = await DriversRepository.getDrivers(_company);
    res.status(200).send(drivers);
  }
  static async createDriver(req, res) {
    const driver = await DriversRepository.createDriver(req.body);
    res.status(200).send(driver);
  }
};
