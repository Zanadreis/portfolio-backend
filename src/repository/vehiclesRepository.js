const Vehicles = require("../models/vehicles");

module.exports = class VehiclesRepository {
  static createVehicle(vehicle) {
    return Vehicles.create(vehicle);
  }
};