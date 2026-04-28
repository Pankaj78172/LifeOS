const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendEmail = require("../utils/sendEmail")

const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = await User.findOne({ email })
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isVerified: false,
    verificationCode,
    verificationCodeExpires: Date.now() + 10 * 60 * 1000
  })

 try {
  await sendEmail(
    email,
    "LifeOS Verification Code",
    `Your LifeOS verification code is: ${verificationCode}`
  )

  console.log("EMAIL SENT SUCCESSFULLY")
} catch (error) {
  console.log("EMAIL FAILED")
  console.log(error.message)
}

  res.status(201).json({
    message: "Account created. Please verify your email",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" })
  }

  if (!user.isVerified) {
  return res.status(403).json({
    message: "Please verify your email before logging in"
  })
}

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" })
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  res.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  })
}


const verifyUser = async (req, res) => {
  const { email, code } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  if (user.isVerified) {
    return res.status(400).json({ message: "User already verified" })
  }

  if (
    user.verificationCode !== code ||
    user.verificationCodeExpires < Date.now()
  ) {
    return res.status(400).json({ message: "Invalid or expired code" })
  }

  user.isVerified = true
  user.verificationCode = undefined
  user.verificationCodeExpires = undefined

  await user.save()

  res.json({ message: "Email verified successfully. You can now login." })
}


const resendCode = async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  if (user.isVerified) {
    return res.status(400).json({ message: "User already verified" })
  }

  // 👉 generate new code
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()

  user.verificationCode = verificationCode
  user.verificationCodeExpires = Date.now() + 10 * 60 * 1000

  await user.save()

  // 👉 SEND EMAIL AGAIN
  try {
    await sendEmail(
      email,
      "LifeOS Verification Code (Resent)",
      `Your new LifeOS verification code is: ${verificationCode}`
    )

    res.json({ message: "Verification code resent successfully" })

  } catch (error) {
    console.log("RESEND EMAIL ERROR:", error)
    res.status(500).json({ message: "Failed to send email" })
  }
}




module.exports = {
  registerUser,
  loginUser,
  verifyUser,
  resendCode
}