const VehiclesRepository = require("../repository/vehiclesRepository");

module.exports = class createServices {

  static async createVehicle(req, res) {
    const vehicle = await VehiclesRepository.createVehicle(req.body);
    res.status(200).send(vehicle);
  }
};
