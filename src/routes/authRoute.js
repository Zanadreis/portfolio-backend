const express = require("express");
const route = express.Router();
const authController = require("../controllers/authController");

route.post("/signup", authController.signup);
route.post("/login", authController.login);
route.post("/logout", authController.logout);
route.post("/verify", authController.verify); //not going to be used
route.post("/password-recovery", authController.passwordRecovery);
route.post("/reset-password", authController.resetPassword);

module.exports = route;

