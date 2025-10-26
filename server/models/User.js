import { Sequelize,DataTypes
 } from "sequelize"
import bcrypt from "bcrypt"
const sequelize = new Sequelize("todoapp", "root", "federico@899", {
  host:"localhost",
  dialect: 'mysql',
})

export const User = sequelize.define(
    'User',{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)

User.addHook("beforeSave",async (user,options)=>{
user.password = await bcrypt.hash(user.password,await bcrypt.genSalt())
})
