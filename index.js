require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/router");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(AuthMiddleware)

app.use(router);

app.listen(port, () => {
  console.log(`Server Online, port: ${port}`);
});
