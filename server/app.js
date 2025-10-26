import express from "express"
import dotenv from "dotenv"
import { Sequelize } from "sequelize"
import cors from "cors"
import morgan from "morgan"
import userRouter from "./controllers/User.js"
import taskRouter from "./controllers/Task.js"
import { authenticate } from "./middleware/authenticate.js"
const app = express()
dotenv.config()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use("/api/v1",userRouter)
app.use("/api/v1",taskRouter)
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host:process.env.DB_HOST,
//   dialect: 'mysql',
// })





const start = () =>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server listening on port ${process.env.PORT}`);
          
    }
)
}


start()