const jwt = require("jsonwebtoken");
// protected route middleware

const authMiddleware = async (request, response) => {
  try {
    const token = request.cookies.jwt;
    console.log(request);
    console.log(request.cookies);
    console.log("Token:", token); // Log token to verify its presence

    if (token) {
      const verify = await jwt.verify(token, "token");
      console.log("Decoded Token:", verify); // Log decoded token for debugging

      if (verify) {
        return response.status(200).json({
          message: "you logged in",
          data: verify.email,
        });
      } else {
        return response.status(400).json({
          message: "invalid credentials",
        });
      }
    } else {
      return response.status(400).json({
        message: "not a token",
      });
    }
  } catch (error) {
    return response.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
