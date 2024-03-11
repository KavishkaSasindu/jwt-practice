const jwt = require("jsonwebtoken");
// protected route middleware

const authMiddleware = async (request, response, next) => {
  try {
    const authorizationHeader = await request.headers.authorization;
    if (!authorizationHeader) {
      return response.status(404).json({
        message: "no token here",
      });
    }
    const token = authorizationHeader.split(" ")[1];
    const verify = jwt.verify(token, "token");

    next();
  } catch (error) {
    return response.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = authMiddleware;
