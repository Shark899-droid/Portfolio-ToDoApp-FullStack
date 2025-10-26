import {createContext, ReactNode, useContext} from "react"

const TaskContext = createContext<any>(undefined)

export const useTaskContext = () =>{
return useContext(TaskContext)
} 

export function TaskProvider ({children}:{children:ReactNode}){
    return(<TaskContext.Provider value={{}}>{children}</TaskContext.Provider>)
}

