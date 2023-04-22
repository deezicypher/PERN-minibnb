
import { useState, useEffect } from "react";
import { createContext } from "react";
import instance from "../../config";

export const UserContext = createContext({});

export const  UserContextProvider = ({children}) => {

        const [user, setUser] = useState(); 

        const getUser = async () => {
                try {
                        instance.get('/users/profile').then(res=>console.log(res)).catch(err=>console.log(err)) 
                } catch (error) {
                   console.log(error)     
                }
        }
        useEffect(() => {
              getUser();
        }, [])

 return (
    <UserContext.Provider value={{user, setUser}}>
            {children}
    </UserContext.Provider>
 )
}



