import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const Mobile = () => {
const role=useSelector((state)=>state.auth.role)

  return (
   <>
   <div className='w-full flex items-center justify-between px-8 mt-4 lg:hidden'>
  {role=="user" && (
    <>
     <Link to="/Contact/OrderHistory" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>
    Order History
    </Link>
    <Link to="/Contact/setting" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>
   Setting
    </Link>
    </>
  )}
  {role=="admin" && (
    <>
     <Link to="/Contact/allorders" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>
    ALL ORDERS
    </Link>
    <Link to="/Contact/addbooks" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>
   ADD BOOKS
    </Link>
    </>
  )}
   </div>
   
   </>
  )
}
