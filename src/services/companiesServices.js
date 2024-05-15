const CompaniesRepository = require("../repository/companiesRepository");

module.exports = class createServices {
  static async createCompany(req, res) {
    const company = await CompaniesRepository.createCompany(req.body);
    res.status(200).send(company);
  }
};
