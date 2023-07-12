const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const body = req.body;

    let create = await userModel.create(body);
    return res
      .status(201)
      .send({ status: true, message: "Registered Sucessfully", data: create });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email, password: password });

    let token = jwt.sign(
      { userId: user._id, email: user.email },
      "thisIsASecretKey"
    );
    res.setHeader("x-api-key", token);
    res.status(200).send({
      status: true,
      data: { token: token},
      msg: "successfully loggedIn",
    });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createUser, userLogIn };