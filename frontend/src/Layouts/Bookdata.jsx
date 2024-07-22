import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export const Bookdata = () => {
  const navigate=useNavigate()
  const {id}=  useParams()
  const [bookdata,setbookdata]=useState("");
  // console.log(id)
  const isloggedin=useSelector((state)=>state.auth.isloggedin)
  const role=useSelector((state)=>state.auth.role)
  const headers={
    id: JSON.parse(localStorage.getItem("users"))._id,
    authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`,
    bookId:id
  }
    useEffect(()=>{
        const fetch=async()=>{
        const bookdetail=await axios.get(`http://localhost:3000/course/getbookbyid/${id}`)
        setbookdata(bookdetail.data.data)
        }

        fetch()
    },[])
   const addtocart=async()=>{
    
    const res=await axios.put("http://localhost:3000/cart/addtocart",{},{headers})
    alert(res.data.message)
   }

const del=async()=>{
  const res=await axios.delete("http://localhost:3000/course/deletebook",{headers})
  alert(res.data.message)
  navigate("/")
}

  return (
    <>
    <div className='main max-w-screen-2xl  h-[85vh] container  mx-auto md:px-20 mt-10 md:mt-16 px-4 flex  flex-col md:flex-row'>
        
       {/* <div className='bg-zinc-800 rounded p-4 h-[88vh] w-[88vw]'></div>
       <div className='p-4'></div> */}
          <div className="card bg-base-100 w-[88vw] md:h-[80vh] h-[88vh] md:w-2/5 shadow-xl mt-8 my-3 hover:shadow-2xl hover:scale-105 duration-150 dark:bg-slate-500 dark:text-white">
         <div className='flex items-center justify-between'> <Link to='/course'>   <button className='btn'>Back </button></Link>
         {
          (isloggedin=="true" && role=="admin" && (<Link to={`/updatebook/${id}`}> <FaEdit className='h-4 w-4'  /> </Link>))
         } </div>
  <figure>
  
    <img className='h-80 w-full object-cover'
      src={bookdata.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookdata.name}
      <div className="badge badge-secondary">{bookdata.category}</div>
    </h2>
    <p>{bookdata.title}</p>
    
    <div className="card-actions justify-between">
      <div className='badge badge-outline'>रु {bookdata.price}</div>

    {
      (isloggedin=="true" && role=="user" &&
        (<button onClick={()=>{addtocart()}}>  <div className=" p-2 font-semibold border-black border-8px rounded-full py-2  hover:text-white duration-200 cursor-pointer hover:bg-pink-500">ADD <FaCartPlus  className='h-4 w-4'/></div></button>)
      )
     
    }
    {
      (isloggedin=="true" && role=="admin" &&
        (<button onClick={del} >  <div className=" p-2 font-semibold border-black border-8px rounded-full py-2  hover:text-white duration-200 cursor-pointer hover:bg-pink-500"><MdDelete className='h-4 w-4' /></div></button>)
      )
     
    }
      
    </div>
   
  </div>
</div>
        </div>
    </>
  )
}
