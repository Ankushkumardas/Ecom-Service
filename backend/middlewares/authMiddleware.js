import jwt from 'jsonwebtoken';

export const authmiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized user: No token provided", success: false });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res
        .status(401)
        .json({ message: "Unauthorized user: Invalid token", success: false });
    }
    req.user = decode;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized user: Token verification failed", success: false });
  }
};
