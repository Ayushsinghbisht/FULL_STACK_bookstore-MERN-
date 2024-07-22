import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import {Loader} from "./Loader"
import { FaCheck } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoCrossReference } from "react-icons/go";
import { OrderHistory } from './OrderHistory';
import { Seeuserdata } from './Seeuserdata';
export const Allorders = () => {
const [value,setvalue]=useState({status:""})
const [userdiv,setuserdiv]=useState("hidden")
const [userdivdata,setuserdivdata]=useState()
  const [allorder,setallorder]=useState()
  const headers={
    id: JSON.parse(localStorage.getItem("users"))._id,
    authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`
  } 
  const [option,setoption]=useState(-1)

  useEffect(()=>{

    const fetch=async()=>{
// /getallorder
      const res=await axios.get("http://localhost:3000/order/getallorder",{headers})
      setallorder(res.data.data)
    }
    fetch()


  },[allorder
])
  const change=(e)=>{
      const {value}=e.target
      
      setvalue({status:value})
  }

  const submitchange=async(i)=>{
    setvalue({status:value})
    const id=allorder[i]._id
    const res=await axios.put( `http://localhost:3000/order/update/${id}`,value,{headers})
    alert(res.data.message)
  }
 

const setOptionButton=(i)=>{
setoption(i)
}
  return (
    <>
      { !allorder && <div className='h-[100%] flex items-center justify-center'> <Loader/> </div>}

      { allorder && allorder.length>0 && (
        <>
        <div className='h-[100%] p-0 md:p-4 text-zinc-100 flex flex-col'>
         <h1 className='text-5xl font-semibold text-zinc-500 mb-8 dark:text-black'>
          ALL Order History
             </h1>
             <div className='mt-4vh-screen bg-zinc-800 w-full rounded py-2 px-4 flex  gap-2'>
              <div className='w-[3%]'>
                <h1 className='text-center'>sr</h1>
              </div>
              <div className='w-[22%]'>
                <h1 className='text-center'>Books</h1>
              </div>
              <div className='w-[40%]'>
                <h1 className='text-center'>Discriptions</h1>
              </div>
              <div className='w-[9%]'>
                <h1 className='text-center'>Price</h1>
              </div>
              <div className='w-[16%]'>
                <h1 className='text-center'>Status</h1>
              </div>
              <div className='w-none hidden md:w-[10%]  md:block '>
                <h1 className='text-center'><FaUserCircle /></h1>
              </div>
              {/* <div className='w-[10%] flex items-center justify-center'> </div> */}
              </div>

              {allorder.map((item,i)=>{
                return(<>
                { item.book!=null && (
                <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer'>
                <div className='w-[3%]'>
              <h1 className='text-center'>{i*1}</h1>
              </div>
              <div className='w-[22%]'>
              <Link className="hover:text-blue-800" to={`/getbookbyid/${item.book._id}`} >{item.book.title}</Link>
              </div>
              <div className='w-[40%]'>
              <h1 className='text-center justify-center items-center'>{item.book.name}</h1>
              </div>
              <div className='w-[9%]'>
              <h1 className='text-center'>₹ {item.book.price}</h1>
              </div>
              <div className='w-[16%]'>
              <h1 className='text-center font-semibold text-green-500'>
                <button className='hover:scale-105 transition-all duration-300' onClick={()=>setOptionButton(i)} >
                {item.status=='order placed'? (
<div className="">{item.status} </div>
):item.status=='out for delivery'? (
<div className="text-yellow-400">{item.status} </div>
  ):item.status=='cancelled'? (
  <div className=" text-red-500">{item.status} </div>
    ):item.status=='delivered'? (
  <div className=" text-white">{item.status} </div>
  ):(item.status)

}
              </button>
              {option==i && <div className='flex'>
                <select name="status" className='bg-gray-800' id="" value={value.status} onChange={(e)=>{change(e)}}>
                    {[
                      "orderplaced",
                      "out for delivery",
                      "delivered",
                      "cancelled"
                    ].map((item,i)=>(
                      <option value={item} key={i}>{item}</option>
                    ))}
                </select>
                <button className='text-green-500 hover:text-pink-600 mx-2' onClick={()=>{
                  setoption(-1)
                  submitchange(i)
                }}>
                <FaCheck />
                </button>
              </div> }
              </h1>
              </div>
              <div className='w-none hidden md:w-[10%] md:block '>
             <button className='text-xl hover:text-orange-500'
             onClick={()=>{
              setuserdiv("fixed")
              setuserdivdata(item.user)
             }}>

<GoCrossReference />
             </button>
              </div>
              
              </div>) }</>)
              })}

              </div>

              {userdivdata && (
                <Seeuserdata
                userdivdata={userdivdata}
                userdiv={userdiv}
                setuserdiv={setuserdiv}/>
              )}

        </>
      )}

    
    </>
  )
}
