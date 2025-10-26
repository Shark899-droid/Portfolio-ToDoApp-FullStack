"use client"
import {createContext, ReactNode, useContext,useState} from "react"
import axios from "axios"
const UserContext = createContext<any>(undefined)

export const useUserContext = () =>{
return useContext(UserContext)
} 

export function UserProvider ({children}:{children:ReactNode}){
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [showErrorPopUp, setShowErrorPopUp] = useState(false)
    const [showSuccessPopUp, setShowSuccessPopUp] = useState(false)

    const popUpSuccessTimer = () =>{
        setShowSuccessPopUp(true)
        setTimeout(() => {
            setShowSuccessPopUp(false)
        }, 5000)
    }
    const popUpErrorTimer = () =>{
        setShowErrorPopUp(true)
        setTimeout(() => {
            setShowErrorPopUp(false)
        }, 5000)
    }

    const login =async () =>{
        try{
        const user = await axios.post('http://localhost:3000/api/v1/login', {
          email,
          password,
        })
        console.log(user);
        
        localStorage.setItem("token",user.data.token)
        localStorage.setItem("name",user.data.name)
        setEmail("")
        setPassword("")
        popUpSuccessTimer()  
        setTimeout(() => {
            window.location.href = "/dashboard"
          }, 2000)
    }catch(error){
        console.error(error)
        popUpErrorTimer()
    }
    }

    const register =async () =>{
        try{
        const user = await axios.post("http://localhost:3000/api/v1/register",{firstName:name,email,password})
        console.log(user);
        setName('')
        setEmail('')
        setPassword('')
        popUpSuccessTimer()
        setTimeout(() => {
        
          window.location.href = "/login"
        }, 2000)
        }catch(error){
            popUpErrorTimer()
        }
        
        
    }
    return (
      <UserContext.Provider
        value={{
          name,
          email,
          password,
          setName,
          setEmail,
          setPassword,
          login,
          register,
          showErrorPopUp,
          setShowErrorPopUp,
          showSuccessPopUp,
          setShowSuccessPopUp,
        }}
      >
        {children}
      </UserContext.Provider>
    )
}

