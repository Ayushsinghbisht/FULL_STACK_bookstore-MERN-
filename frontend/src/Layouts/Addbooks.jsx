import axios from 'axios'
import React, { useState } from 'react'



export const Addbooks = () => {

    const [data,setdata]=useState({
        image:"",
        title:"",
        name:"",
        price:"",
        category:"",
       
    })


    const headers={
        id: JSON.parse(localStorage.getItem("users"))._id,
        authorization:`Bearer ${JSON.parse(localStorage.getItem("users")).token}`,
       
      }

      const change=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]: value})

      }

      const submit=async()=>{

        try{
            if(data.image==""||
                data.title==""||
                data.price==""||
                data.name==""||
                data.category==""
               
            ){
                alert("all fields required")
            }else{
                const res=await axios.post("http://localhost:3000/course/addbook",data,{headers})
                console.log(res)
            }

        }catch(err)
        {
            console.log(err)
        }
      }

  return (
    <>
    <div className='h-[100%] p-0 md:p-4 '>
        <h1 className='text-3xl md:text-5xl font-seimbold text-zinc-500 mb-8'>
            Add Book
        </h1>
        <div className='p-4 bg-zinc-800 rounded '>
            <div className=''>
                <label htmlFor='' className='text-zinc-400'>
                    Image
                </label>
                <input 
                type='text'
                className='w-full mt-2 bg-zinc-100 p-2 outline-none'
                placeholder='url of image'
                name='image'
                required
                value={data.image}
                onChange={(e)=>{change(e)}}
                />


            </div>
            <div className='mt-4'>
                <label htmlFor='' className='text-zinc-400'>
                    title of book
                </label>
                <input 
                type='text'
                className='w-full mt-2 bg-zinc-100 p-2 outline-none'
                placeholder='title of book'
                name='title'
                required
                value={data.title}
                onChange={(e)=>{change(e)}}
                />


            </div>
            <div className='mt-4'>
                <label htmlFor='' className='text-zinc-400'>
                   dicription
                </label>
                <input 
                type='text'
                className='w-full mt-2 bg-zinc-100 p-2 outline-none'
                placeholder='discritpion of book'
                name='name'
                required
                value={data.name}
                onChange={(e)=>{change(e)}}
                />


            </div>
            <div className='mt-4'>
                <label htmlFor='' className='text-zinc-400'>
                   Category
                </label>
                <input 
                type='text'
                className='w-full mt-2 bg-zinc-100 p-2 outline-none'
                placeholder='discritpion of book'
                name='category'
                required
                value={data.category}
                onChange={(e)=>{change(e)}}
                />


            </div>
            <div className='mt-4'>
                <label htmlFor='' className='text-zinc-400'>
                 
                 Price
                </label>
                <input 
                type='number'
                className='w-full mt-2 bg-zinc-100 p-2 outline-none'
                placeholder='price of book'
                name='price'
                required
                value={data.price}
                onChange={(e)=>{change(e)}}
                />


            </div>
            
            <button className='mt-4 px-3 bg-blue text-white font-semibold py-2 rounded hover:bg-blue-600 '
            onClick={()=>{submit()}}
            >Add BOOk</button>

        </div>
    </div>

    
    </>
  )
}
