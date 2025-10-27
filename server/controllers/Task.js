import express from "express"

const router = express.Router()


import { createTask,updateTask,deleteTask,getTasks,getTask } from "../services/Task.js" 

router.route("/task").post(createTask)
router.route("/tasks").post(getTasks)
router.route("/task/:id").get(getTask).put(updateTask).delete(deleteTask)


export default router