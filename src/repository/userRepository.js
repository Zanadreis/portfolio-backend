const Users = require("../models/users");

module.exports = class UsersRepository {
  static async creatUser(user) {
    const userValidation = await Users.findOne({email: user.email});
    if(userValidation) return { error: true, message: "User already exists" };
    return Users.create(user);
  }
  
  static findUser(user) {
    return Users.findOne(user);
  }
};