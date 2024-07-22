import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Loader } from './Layouts/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { Cards } from './Layouts/Cards';

export const Cart = () => {

const navigate=useNavigate()
  const [cart,setcart]=useState()
  const [total,settotal]=useState(0)
  const headers={
    id: JSON.parse(localStorage.getItem("users"))._id,
    authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`,
   
  }
  useEffect(()=>{

   

      const cartbooks=async()=>{

        const res=await axios.get("http://localhost:3000/cart/getcart",{headers})
        
        setcart(res.data.data)

      }
      cartbooks()

   

  },[cart])

  const removecart=async(e)=>{
    const res=await axios.put(`http://localhost:3000/cart/removecart/${e}`,{},{headers})
  }
    useEffect(()=>{
      
      if(cart && cart.length>0){
       
        let tota=0;
        cart.map((item)=>{
          tota+=item.price
        })
        
        settotal(tota)
        tota=0;
      }
    },[cart])
  
 
  const placeyourorder=async()=>{
    try{

      const res=await axios.post("http://localhost:3000/order/place",{order:cart},{headers})
      alert("placed")
      
      navigate("/Contact/OrderHistory")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='dark:bg-slate-500 dark:text-white max-w-screen-2xl container py-10 mx-auto md:px-20 px-4 '>
    {!cart && <Loader/> }
    {cart && cart.length==0 && (
      <>
      <div className='h-screen w-screen'>
        <div className='h-[100%] flex items-center justify-center flex-col'>
          <div className='text-5xl lg:text-6xl font-semibold text-zinc-400 -mt-5'>
            Empty Card
          </div>
          <img src="./src/assets/emptycart.avif" alt='empty cart' className='lg:h-[50vh]'/>
          </div> 
      </div>
      </>
    )}
    {cart && cart.length >0 && (
      <> 
      <h1 className='self-center justify-self-center justify-items-center font-semibold mt-5 text-lg'>Your Cart</h1>
      {
        <div className='flex flex-wrap justify-evenly md:gap-4 '> {
       
          cart.map((item)=>{
              
              return(<>
              <div key={item._id} className='flex flex-col' >
                <Link to={`/getbookbyid/${item._id}`} >
                  <div ><Cards key={item.id} item={item} kart={true} /></div>
                  </Link>
                  <button onClick={()=>{removecart(item._id)}}> <div className='rounded bg-red-500 text-white p-1 w-40 hover:bg-red-800'>remove </div> </button>
                  </div>
                  </>)

          })
          
         }</div>
      }
      </>
    )}
    {
      cart && cart.length>0
 &&(
  <>
          <div className='mt-4 flex items-center justify-end'>
            <div className='p-4 bg-zinc-800 rounded'>
              <h1 className='text-xl  text-zinc-200 font-semibold'>
                Total Amount
              </h1>
              <div className='mt-3 flex items-center justify-between text-xl text-zinx-200'>
                <h2>{cart.length} books</h2> <h2>{total}</h2>
              </div>
              <div className='w-[100%] mt-3'>
                <button onClick={()=>{placeyourorder()}} className='bg-zinc-100 dark:text-black rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-600'>
                  Place your order
                </button>
              </div>
            </div>
          </div>
  </>
 )    }
    </div>
  )
}
