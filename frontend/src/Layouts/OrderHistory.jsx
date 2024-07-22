import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Loader} from "./Loader.jsx"
import { Link } from 'react-router-dom';
export const OrderHistory = () => {
const [orderhistory,setorderhistory]=useState();

  const headers={
    id: JSON.parse(localStorage.getItem("users"))._id,
    authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`
  } 

  useEffect(()=>{

    const fetch=async()=>{

     const res= await axios.get("http://localhost:3000/order/get",{headers})
     
    //  console.log(res.data.data[0])
      setorderhistory(res.data.data)
    }
    fetch()

// console.log(orderhistory)
  },[]) 

  // console.log(orderhistory)
  return (
    <>
    {!orderhistory &&<div className=''>< Loader/></div> }
    {orderhistory && orderhistory.length==0 &&
    (<>
    <div className='h-[80vh] p-4 text-zinc-100'>
      <div className='h-[100%] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-semibold text-zinc-500 mb-8 dark:text-black'>
          No Order History
        </h1>
        <img className='h-[20vh] mb-8' src='https://img.freepik.com/free-psd/cardboard-box-packaging_23-2150816232.jpg?uid=R155107352&ga=GA1.1.1315993443.1721377850&semt=ais_user' alt='empty cart'/>
      </div>
    </div>
    
    </>)}
    {
      orderhistory && orderhistory.length>0 && (
        <>
            <div className='h-[100%] p-0 md:p-4 text-zinc-100 flex flex-col'>
            <h1 className='text-5xl font-semibold text-zinc-500 mb-8 dark:text-black'>
          Your Order History
             </h1>
             <div className='mt-4vh-screen bg-zinc-800 w-full rounded py-2 px-4 flex  gap-2'>
              <div className='w-[3%]'>
                <h1 className='text-center'>sr</h1>
              </div>
              <div className='w-[22%]'>
                <h1 className='text-center'>Books</h1>
              </div>
              <div className='w-[45%]'>
                <h1 className='text-center'>Discriptions</h1>
              </div>
              <div className='w-[9%]'>
                <h1 className='text-center'>Price</h1>
              </div>
              <div className='w-[16%]'>
                <h1 className='text-center'>Status</h1>
              </div>
              <div className='w-none hidden md:w-[5%] md:block '>
                <h1 className='text-center'>Mode</h1>
              </div>
              
              </div>
              <div className='flex flex-col'>
               
              {orderhistory.map((item,i)=>{
                
            return (<>
{
  item.book!=null && (
<div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer'>
  <div className='w-[3%]'>
<h1 className='text-center'>{i*1}</h1>
</div>
<div className='w-[22%]'>
<Link className="hover:text-blue-800" to={`/getbookbyid/${item.book._id}`} >{item.book.title}</Link>
</div>
<div className='w-[45%]'>
<h1 className='text-center justify-center items-center'>{item.book.name}</h1>
</div>
<div className='w-[9%]'>
<h1 className='text-center'>₹ {item.book.price}</h1>
</div>
<div className='w-[16%]'>
<h1 className='text-center font-semibold text-green-500'>
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
</h1>
</div>
<div className='w-none hidden md:w-[5%] md:block '>
<h1 className='text-center'>COD</h1>
</div>

</div>
  )
}

</>)
})}
              </div>

               

            </div>
        </>
      )
    }

    </>
  )
}
