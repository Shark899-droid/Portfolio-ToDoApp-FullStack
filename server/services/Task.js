import {Task} from "../models/Task.js"
import {User} from "../models/User.js"
export const createTask=async(req,res)=>{
try{
const {title,description,is_completed,user_id} = req.body
if(!title || !user_id){
    res.status(500).json({error:"There is some issue"})
}
const task = await Task.create({title,description,is_completed,user_id})
res.status(201).json(task)
}catch(error){
    res.status(500).json({error})
}

}
export const getTasks=async(req,res)=>{
try{
  const {user_id} = req.body
const tasks = await Task.findAll({where:{user_id}})
res.status(200).json(tasks)
}catch(error){
    res.status(500).json({error})
}

}
export const updateTask=async(req,res)=>{
try{
    const id = req.params.id
const task = await Task.update(req.body,{where:{id}})
res.status(200).json(task)
}catch(error){
    res.status(500).json({error})
}

}
export const deleteTask=async(req,res)=>{
try{
const id = req.params.id
 await Task.destroy({where:{id}})
res.status(200).json({message:`Task with id ${id} deleted successfully`})
}catch(error){
    res.status(500).json({error})
}

}
export const getTask = async (req, res) => {
  try {
    const id = req.params.id
    console.log(id);
    
    const task = await Task.findOne({where:{id}, include: User })
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}