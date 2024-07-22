import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = (props) => {

  const role=useSelector((state)=> state.auth.role)

  return (
    <>
    <div className='lg:h-full rounded bg-zinc-500 dark:bg-zinc-700 p-1 px-4 flex items-center justify-center flex-col '>
      
      <img src={props.data.avatar} className='h-[10vh] rounded-full'></img>
      <p className='mt-3 text-xl text-zinc-100 font-semibold'>{props.data.fullname}</p>
      <p className='mt-3 text-normal text-zinc-100 '>{props.data.email}</p>
    <div className='w-full mt-4 h-[1px] bg-zinc-100 hidden lg:block'/>

    <div className='w-full flex-col items-center justify-center hidden  lg:flex'>

    
    {role=="user" && (<>
      <Link to="/Contact/OrderHistory" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all'>
    Order History
    </Link>
    <Link to="/Contact/setting" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all'>
   Setting
    </Link>
    </>)}
    {role=="admin" && (<>
      <Link to="/Contact/allorders" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all'>
    ALL ORDERS
    </Link>
    <Link to="/Contact/addbooks" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all'>
   ADD BOOKS
    </Link>
    </>)}

    </div>

    </div>
    </>
  )
}
