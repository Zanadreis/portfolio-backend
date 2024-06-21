const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger')
const authRoute = require("./routes/authRoute");
const authHandler = require("./middlewares/authHandler");
const fieldValidator = require("./middlewares/fieldValidator");
const vehiclesRoute = require("./routes/vehiclesRoute");
const driversRoute = require("./routes/driversRoute");
const companiesRoute = require("./routes/companiesRoute");
const reportsRoute = require("./routes/reportsRoute");

router.get("/", (req, res) =>
    res.status(200).send({ message: "Welcome to Portifolio API! Try the documentation at /docs" })
);

router.use(authHandler)
router.use(fieldValidator)

router.get("/health", (req, res) =>
    res.status(200).send({ message: "Health check ok!" })
);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocs));

router.use("/auth", authRoute);
router.use("/vehicles", vehiclesRoute);
router.use("/drivers", driversRoute);
router.use("/companies", companiesRoute);
router.use("/reports", reportsRoute);

module.exports = router;