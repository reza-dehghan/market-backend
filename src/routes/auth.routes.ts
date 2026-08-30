import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../middleware/asyncHandler";

const router = Router();

const authController = new AuthController();

router.post(
    "/signup",
    asyncHandler((req, res, next) => {
        return authController.signup(req, res);
    })
);

router.post(
    "/login",
    asyncHandler((req, res, next) => {
        return authController.login(req, res);
    })
);

router.post(
    "/verify-otp",
    asyncHandler((req, res, next) => {
        return authController.verifyOtp(req, res);
    })
);

export default router;