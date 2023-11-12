const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next ) => { //added the next to catch the error
  try {
    // const newUser = new User({
    //     username: "test",
    //     email: "test",
    //     password: "test",
    //     country: "test"
    // })

    const hash = bcrypt.hashSync(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found!");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(404).send("Wrong Password or Username!");

    const token = jwt.sign({
        id: user._id,
        isSeller: user.isSeller
    },
    process.env.JWT_KEY
    );

    const { password, ...info } = user._doc; //this will not send back the password.
    res.cookie("accessToken", token,{
        httpOnly: true //this will only access using http and store in cookies
    }).status(200).send(info);
  } catch (error) {
    res.status(500).send(error);
  }
};
const logout = async (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
