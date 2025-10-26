import {createContext, ReactNode, useContext} from "react"

const UserContext = createContext<any>(undefined)

export const useUserContext = () =>{
return useContext(UserContext)
} 

export function UserProvider ({children}:{children:ReactNode}){
    return(<UserContext.Provider value={{}}>{children}</UserContext.Provider>)
}

