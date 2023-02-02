import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthContextProvider= ({children})=>{
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

   const login = async(inputs) =>{
        // setCurrentUser({id:1,name:"Vishal ",profile:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"})
        const res = await axios.post("http://localhost:8000/api/auth/login",inputs,{
            withCredentials:true
        });
       console.log(true)
        setCurrentUser(res.data);
     }

    useEffect(() => {
          localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser]);

    return <AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>

}