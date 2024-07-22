import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar } from '../Profile/Sidebar.jsx'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Loader } from './Loader.jsx'
import { Mobile } from '../Profile/Mobile.jsx'
export const Contact = () => {
const [profile,setprofile]=useState()

// const isloggedin=  useSelector()
const headers={
  id: JSON.parse(localStorage.getItem("users"))._id ,
  authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`
}
  useEffect(()=>{

    const fetch=async ()=>{
 
console.log(headers.id)

    const res=  await axios.get("http://localhost:3000/user/getuserinfo",{headers})
    // console.log(res.data)
      setprofile(res.data)
    }
fetch()

  },[])

  return (
   
   <>
   <div className='main max-w-screen-2xl  h-[85vh]  container gap-6  mx-auto md:px-20 p-24 md:p-20 px-4 flex  flex-col md:flex-row'>

  {!profile && <Loader/>}
   {profile &&( <><div className=' w-full md:w-1/6  '><Sidebar data={profile}/>
   <Mobile />
    </div>
    <div className='w-full md:w-5/6 '><Outlet/>  </div>  </>)}
   </div>
   </>
  )
}
 