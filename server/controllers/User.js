import express from "express"

const router = express.Router()

import { register,login, getUsers } from "../services/User.js"

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/getUsers").get(getUsers)

export default router