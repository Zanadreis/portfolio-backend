const express = require("express");
const route = express.Router();
const userService = require("../services/userService");

route.post("/signup", userService.signup);
route.post("/login", userService.login);
route.post("/logout", userService.logout);
route.post("/verify", userService.verify);
route.post("/password-recovery", userService.passwordRecovery);
route.post("/reset-password", userService.resetPassword);

module.exports = route;

