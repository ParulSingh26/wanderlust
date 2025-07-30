require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authModel = require("../schema/auth.model");
const jwt = require("jsonwebtoken");
const isVerifyUser = require("../middleware/isVerifyUser");

const secretKey = process.env.SECRET_KEY;

router.post("/signup", async (req, res) => {
  const { name, email, password, terms_condition } = req.body;
  try {
    let user = await authModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    user = await authModel.create({
      name,
      email,
      password: hashPass,
      terms_condition,
    });
    res.send({
      success: true,
      message: "account created successfully",
      auth: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await authModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isVerifyPass = await bcrypt.compare(password, user.password);
  console.log(isVerifyPass);
  if (!isVerifyPass) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  let token = jwt.sign({ id: user._id }, secretKey);
  res.send({
    success: true,
    message: "Login successfully",
    user,
    token,
  });
});

router.get("/getuser", isVerifyUser, async (req, res) => {
  let auth = await authModel.findById(req.user);
  res.send({
    success: true,
    message: "user found",
    user: auth,
  });
});

router.put("/update/profile", async (req, res) => {});

router.delete("/delete", isVerifyUser, async (req, res) => {
  try {
    const auth = await authModel.findByIdAndDelete(req.user);
    res.send({
      success: true,
      message: "user deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error deleting user",
    });
  }
});

module.exports = router;
