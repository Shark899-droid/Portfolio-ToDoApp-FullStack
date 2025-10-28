"use client"
import axios from 'axios'

import {createContext, ReactNode, useContext,useState} from "react"

const TaskContext = createContext<any>(undefined)

export const useTaskContext = () =>{
    return useContext(TaskContext)
} 

export function TaskProvider ({children}:{children:ReactNode}){
    const [nomeTask,setNomeTask] = useState("")
    const [editNomeTask,setEditNomeTask] = useState("")
    const [tasks,setTasks] = useState([])
    const [isEditPopUpOpen, setIsEditPopUpOpen] = useState(false)
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)


    const logout = () =>{
      localStorage.clear()
      window.location.href = "/login"
    }

    const setCompleted = async (id: number, newStatus: boolean) => {
      // MODIFIED
      const task = await axios.put(
        `http://localhost:3000/api/v1/task/${id}`,
        {
          is_completed: newStatus, 
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      console.log(task)

      getAllTasks()
    }
    const addTask =async () =>{
        const id = parseInt(localStorage.getItem("id")??"0")
     await axios.post(
      'http://localhost:3000/api/v1/task',
      { title:nomeTask, user_id: id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    setNomeTask("")
   
    getAllTasks()
    }
    const deleteTask =async (id:number)=>{
         await axios.delete(
          `http://localhost:3000/api/v1/task/${id}`,
        
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
     getAllTasks()
          

    }
    const getAllTasks = async()=>{
        const task = await axios.post(
          'http://localhost:3000/api/v1/tasks',
          {
            user_id: localStorage.getItem('id'),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        console.log(task.data);
        
        setTasks(task.data)
        
       
    }
    // TODO
    const updateTask = async(id:number)=>{
        const task = await axios.put(
          `http://localhost:3000/api/v1/task/${id}`,
          {
            title: editNomeTask,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        console.log(
          task
        );
        
        getAllTasks()
        
       
    }
    return (
      <TaskContext.Provider
        value={{
          addTask,
          deleteTask,
          getAllTasks,
          nomeTask,
          setNomeTask,
          tasks,
          isEditPopUpOpen,
          setIsEditPopUpOpen,
          editNomeTask,
          setEditNomeTask,
          selectedTaskId,
          setSelectedTaskId,
          updateTask,
          setCompleted,
          logout
        }}
      >
        {children}
      </TaskContext.Provider>
    )
}

