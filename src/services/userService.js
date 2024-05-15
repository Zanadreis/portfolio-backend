const bcrypt = require('bcrypt');
const axios = require('axios');
const UsersRepository = require("../repository/userRepository");
const authUrl = process.env.AUTH_URL;
const saltRounds = Number(process.env.HASH_SALT);

module.exports = class AuthServices {
  static async signup(req, res) {
    let {name, email, password, role, company } = req.body;
    const HashedPassword = await bcrypt.hash(password, saltRounds);
    const user = {name, email, password: HashedPassword, role, company}
    const response = await UsersRepository.creatUser(user);
    return res.send(response);
  }

  static async login(req, res) {
    const {email, password} = req.body

    const user = await UsersRepository.findUser({email: email});
    if (!user) return res.status(404).send({message: "User not found"});

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send({message: "Invalid password"});

    user.password = undefined;

    await axios.post(`${authUrl}/login`, { user })
    .then(function (response) {
        const {token} = response.data;
        return res.status(200).send({token: token});
    })
    .catch(function (error) {
      console.log(error);
      const { status } = error.response;
      const { message, auth } = error.response.data;
      return res.status(status).send({message, auth});
  });
    return res.send()
  }
  
  static async logout(req, res) {
    const {token} = req.body
    await axios.post(`${authUrl}/logout`, { token })
    .then(function (response) {
        return res.status(401).send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      const { status } = error.response;
      const { message, auth } = error.response.data;
      return res.status(status).send({message, auth});
  });
  }
  
  static async verify(req, res) {
    const {token} = req.body
    axios.post(`${authUrl}/verify`, { token: token })
    .then(function (response) {
        const {auth, user} = response.data;
        if(!auth) return res.status(401).send({message: "Unauthorized"});
        req.body._company = user.company;
        return res.send({auth: auth, user: user});
    })
    .catch(function (error) {
      console.log(error);
      const { status } = error.response;
      const { message, auth } = error.response.data;
      return res.status(status).send({message, auth});
  });
  }
  
  static async passwordRecovery(req, res) {
    // TODO //
  }
  
  static async resetPassword(req, res) {
    // TODO //
  }

};
