import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext=createContext()
export default function AuthProvider ({children})  {

  const initialAuthuser=localStorage.getItem("users")
   
  const [authuser,setauthuser]= useState( 
      initialAuthuser?JSON.parse(initialAuthuser) : undefined
  )



    

  return (
    <AuthContext.Provider value={[authuser, setauthuser ]} >{children}</AuthContext.Provider>
    
    
  )
}
export const useAuth=()=>useContext(AuthContext)