import { Sequelize,DataTypes
 } from "sequelize"
 import { User } from "./User.js"
const sequelize = new Sequelize("todoapp", "root", "federico@899", {
  host:"localhost",
  dialect: 'mysql',
})

export const Task = sequelize.define(
    "Task",{
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        },
        is_completed:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:User,
                key:"id"
            }
        }
    }
)

Task.belongsTo(User,{
    foreignKey:"user_id"
})

User.hasMany(Task,{
    foreignKey:"user_id"
})
