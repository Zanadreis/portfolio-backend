const mongoose = require("../db/conn");
const Reports = require("../models/reports");

module.exports = class ReportsRepository {
  static createReport(report) {
    return Reports.create(report);
  }

  static async getReports(_company) {
    let query = [
      { $match: {
          company: new mongoose.Types.ObjectId(_company)
        } 
      },
      {
        $project: {
          _id: 0,
          data: 0,
          company: 0
        }
      },
      {
        $sort: {
          date: 1
        }
      }
    ]

    return Reports.aggregate(query);
  }
};
