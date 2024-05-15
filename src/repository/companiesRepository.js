const Companies = require("../models/companies");

module.exports = class CompaniesRepository {
  static createCompany(company) {
    return Companies.create(company);
  }
};
