import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

// import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "64cc40653190b57931936358";

    req.user = { userId, role, testUser };

    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role)
      throw new UnauthorizedError("not authorized to access this route");
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo User. Read Only!");
  next();
};
