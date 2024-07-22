import React, { useEffect, useState } from 'react'
import list from '../../public/Booklist.json'
import { Cards } from './Cards';
import { Link } from 'react-router-dom'
import axios from "axios"


export const Course = () => {

  const [book,setbook]=useState([])
  useEffect(()=>{

const getbook=async()=>{
try{ 
const res=await axios.get("http://localhost:3000/course") /* have to use the directory where get req get res from backend means app.use */

setbook(res.data)
}catch(err){
  console.log(err)
}
}

getbook()

  },[])
  

  return (
    <>
    <div className='dark:bg-slate-500 dark:text-white max-w-screen-2xl container py-10 mx-auto md:px-20 px-4 -my-12'>

    <div className='mt-28 items-center justify-center text-center '>

      <h1 className='text-2xl  md:text-4xl'> Welcome to Our Online <span className='text-pink-500'> Library!</span></h1>
      <p className='mt-12'>Dive into the world of literature with our vast collection of books available for your reading pleasure. Whether you're looking for timeless classics, contemporary novels, or informative non-fiction, our library offers a wide array of genres to satisfy every reader's taste. Get comfortable, grab your favorite beverage, and embark on a literary journey from the comfort of your own home. Happy reading!</p>
    
    <button className='rounded-md text-white mt-6 bg-pink-500 px-4 py-2 hover:bg-pink-700 duration-150'> <Link to='/Home'> Back ← </Link>  </button>
    </div>



<div className='flex flex-wrap justify-evenly '> {
       
        book.map((item)=>{
            
            return(
              <Link to={`/getbookbyid/${item._id}`} >
                <div ><Cards key={item.id} item={item} /></div>
                </Link>)
        })
        
       }</div>


    </div>
    </>
  )
}
