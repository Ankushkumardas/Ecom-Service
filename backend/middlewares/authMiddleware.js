import jwt from 'jsonwebtoken';
// import User from '../models/User';

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in cookies
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // Check for Bearer token in Authorization header
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized user: No token provided", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized user: Invalid token", success: false });
    }

    // req.user = await User.findById(decoded.user.id).select("-password");
    req.user=decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized user: Token verification failed", success: false });
  }
};