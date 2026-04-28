const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController")

console.log("AUTH CONTROLLER:", authController)

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.post("/verify", authController.verifyUser)
router.post("/resend-code", authController.resendCode)

module.exports = router