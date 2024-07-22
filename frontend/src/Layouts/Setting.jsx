import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Profile/Sidebar.jsx'
export const Setting = () => {

  const [value,setvalue]=useState({address:""})
  const [profile,setprofile]=useState()

  const headers={
    id: JSON.parse(localStorage.getItem("users"))._id,
    authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`
  }


  useEffect(()=>{

    const fetch=async()=>{
      const res=await axios.get("http://localhost:3000/user/getuserinfo",{headers})
      // console.log(res.data.address)
      setprofile(res.data)
      setvalue({address:res.data.address})

    }
    fetch()



  },[])

  const changeaddress=(e)=>{
   let {name,value}=e.target
   setvalue({address:value})
  }
  const handleclick=async()=>{
const res=axios.put("http://localhost:3000/user/updateAddress",value,{headers})
console.log(res)
// alert(res.data.message)
  }

  return (
    <>
      <div className='bg-zinc-500 px-2 md:px-2 flex flex-col md:flex-row py-8 gap-4 text-white '>
        {
          !profile && (
            <div className='w-full h-[100%] flex items-center justify-center'>
              <Loader/>
             </div> 
          )
        }
        {

            profile && (
              <>
                <div className='h-[100%] p-0 md:p-4 text-zinc-100 '>
                  <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
                    Settings
                  </h1>
                  <div className='flex gap-12'>
                    <div className=''>
                      <label htmlFor=''>Username</label>
                      <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold '>
                        {profile.fullname}
                      </p>

                    </div>
                    <div className=''>
                      <label htmlFor=''>Email</label>
                      <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold '>
                        {profile.email}
                      </p>

                    </div>
                    </div>

                    <div className='mt-4 flex flex-col'>
                      <label htmlFor=''>Address</label>
                      <textarea className='p-2 rounded  bg-zinc-800 mt-2 font-semibold'
                      rows="5"
                      placeholder='address'
                      name='Address'
                      value={value.address}
                     onChange={(e)=>{changeaddress(e)}} 
                      ></textarea>
                    </div>


                      <div className='mt-4 flex justify-end'>
                        <button onClick={()=>{handleclick()}} className='bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400'>
                          update
                        </button>
                      </div>

                  </div>
               
            
              </>
            )



        }
      </div>

    </>
  )
}
