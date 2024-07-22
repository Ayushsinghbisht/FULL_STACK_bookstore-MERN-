import React from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authactions } from '../store/Auth';




export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onSubmit = async(data)=>{
    const userinfo={
      email:data.email,
      password:data.password
    }
    
   
     await axios.post("http://localhost:3000/user/login",userinfo)
     .then((res)=>{
      
      
      
      // 
      // const timer= () => setTimeout(() => {
      //   dispatch(authactions.login())
      //   console.log("timer called")
      // }, 1000); 
  
     
      

      
      localStorage.setItem("users",JSON.stringify(res.data.user))
      
    
     navigate("/Contact")
    //  timer()
     dispatch(authactions.login())
    
     dispatch(authactions.changestate(res.data.user.role))
  


     

     })
     
    .catch((err)=>{
     alert(err.message)
    }
  )

  Navigate("/Contact")

  }

  

  return (
    <>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Login</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12   max-w-md dark:bg-slate-500 dark:text-white">
  <div className='flex justify-between'>
    <h3 className="font-bold text-lg">Login !</h3>
    <form method="dialog">
    <button className="btn  btn-ghost ">Close</button>
      </form>
   
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mt-4 space-y-2 py-1">
   
       <span>Email</span><br/>
       <input type='email' placeholder='enter your email' className='w-80 h-10 dark:bg-slate-600 dark:text-white px-3 outline-none border rounded-md' {...register("email", { required: true })} ></input> 
     <br/>  {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
    </div>
    <div className="mt-4 space-y-2 py-1">
   
       <span>Password</span><br/>
       <input type='text' placeholder='Password' className='dark:bg-slate-600 h-10 dark:text-white w-80 px-3 outline-none border rounded-md' {...register("password", { required: true })} ></input> 
      <br/> {errors.password && <span className='text-sm text-red-600 '>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2 py-1 flex justify-between'>
      <input type='submit' value="Login" className='btn bg-pink-500 text-white py-1 py-0'/>
      <h2 className='cursor-pointer'>Not Registered? <Link to='/Signup' className='cursor-pointer underline text-blue-500'>Signup</Link></h2>
    </div>
    </form>
    
  </div>
</dialog>
    </>
  )
}
