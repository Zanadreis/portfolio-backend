const ReportsRepository = require("../repository/reportsRepository");

module.exports = class reportsService {
  static async createReport(req, res) {
    const { drivers, _company} = req.body

    const data = {}

    const objectToSave = {
      company: _company,
      drivers: drivers,
      data: data
    }

    const report = await ReportsRepository.createReport(objectToSave);

    res.status(200).send(report);
  
  }

  static async getReports(req, res) {
    const { _company } = req.body;
    const reports = await ReportsRepository.getReports(_company);
    res.status(200).send(reports);
  }
};
