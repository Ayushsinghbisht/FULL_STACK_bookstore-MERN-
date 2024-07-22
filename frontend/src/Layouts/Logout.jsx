import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useDispatch, useSelector } from 'react-redux'
import { authactions } from '../store/Auth'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
    // const isloggedin= useSelector((state)=>{return state.auth.isloggedin})
    const [authuser,setauthuser]=useAuth()

    const handlelogout=()=>{
        try{
            setauthuser({
                ...authuser,user:null
                
            })
            localStorage.removeItem("users")
      
            dispatch(authactions.logout())
           navigate("/")
            window.location.reload()
        }catch(err){
            alert("error"+err)
        }
    }

  return (
    <>
    <button onClick={handlelogout} className='px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700'>logout</button>
    </>
  )
}
