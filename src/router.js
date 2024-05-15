const express = require('express');
const router = express.Router();
const userRoute = require("./routes/userRoute");
const vehiclesRoute = require("./routes/vehiclesRoute");
const driversRoute = require("./routes/driversRoute");
const companiesRoute = require("./routes/companiesRoute");
const reportsRoute = require("./routes/reportsRoute");

router.get("/health", (req, res) =>
    res.status(200).send({ message: "Health check ok!" })
);

router.use("/auth", userRoute);
router.use("/vehicles", vehiclesRoute);
router.use("/drivers", driversRoute);
router.use("/companies", companiesRoute);
router.use("/reports", reportsRoute);

module.exports = router;