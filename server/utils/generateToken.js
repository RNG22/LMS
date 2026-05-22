jwt = require("jsonwebtoken");

const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      //1d=24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      maxAge: 24 * 60 * 60 * 1000,
    }).json({
      success: true,
      message: message,
      user
    });
};
module.exports = generateToken;
