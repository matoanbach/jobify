import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
  validateUpdateUserInput,
} from "../middleware/validationMiddleware.js";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { authorizePermissions, checkForTestUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
