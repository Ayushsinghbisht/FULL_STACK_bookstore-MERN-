import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import { MdOutlineDeleteOutline } from "react-icons/md";
export function Cards({item,key,kart}){
     
const role=useSelector((state)=>state.auth.role)
  


  return (
    <>  
    <div className="card bg-base-100 w-96 shadow-xl mt-8 my-3 hover:shadow-2xl hover:scale-105 duration-150 dark:bg-slate-500 dark:text-white">
  <figure>
    <img className='h-60 w-full object-cover'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    
    <div className="card-actions justify-between">
      <div className='badge badge-outline'>₹ {item.price}</div>
  
   { role=="user" && !kart && (<><button>  <div className=" p-2 font-semibold border-black border-8px rounded-full py-2  hover:text-white duration-200 cursor-pointer hover:bg-pink-500">Add   <FaCartPlus  className='h-4 w-4'/>
  
  </div>
     
     </button>  </>)}
  
   
      
    </div>

   
  </div>
</div>
    </>
  )
}
