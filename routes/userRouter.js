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
import { authorizePermissions } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
