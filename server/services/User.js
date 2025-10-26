import {User} from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register =async (req,res) =>{
try{
const {firstName,email,password} = req.body
if(!firstName || !email || !password){
    res.status(500).json({error:"Type all the fields"})
    throw new Error("Type all the fields")
}
const user = await User.create({firstName,email,password})
res.status(201).json(user)
}catch(error){
    res.status(500).json({"error":res.error})
}
}
export const login =async (req,res) =>{
const {email,password} = req.body
if(!email || !password){
    res.status(500).json({ error: 'Type all the fields' })
}
const user = await User.findOne({where:{email}})
console.log(user);

if(!user){
    res.status(500).json({ error: "No user with this email." })

    throw new Error("No user with this email.")
}
const isPasswordAuthenticated = await bcrypt.compare(password,user.password)
if(isPasswordAuthenticated){
    const token = jwt.sign({},"private")
    res.status(200).json({token,email})
}else{
    res.status(500).json({ error: "Wrong password." })
    throw new Error("Wrong password.")
}
}
export const getUsers =async (req,res) =>{
    try{
const users = await User.findAll()
res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}