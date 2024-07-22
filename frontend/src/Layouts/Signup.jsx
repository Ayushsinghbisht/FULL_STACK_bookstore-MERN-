import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authactions } from '../store/Auth';

export const Signup = () => {
  const location=useLocation()
  const dispatch=useDispatch()
  const from=location.state?.from?.pathname ||"/"
  const navigate=useNavigate()
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log("data is",data)
    const userinfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
     address:data.address
    };
   
    await axios
    .post("http://localhost:3000/user/signup",userinfo)
    .then((res)=>{console.log(res.data)
     
     
      localStorage.setItem("users",JSON.stringify(res.data.message));
    
      dispatch(authactions.login())
      dispatch(authactions.changestate(res.data.user.role))
     navigate("/Contact")
    
    }).catch((Er)=>{
      if(Er.response)
      {
        alert(Er.response.data.message,"error here")
      }
      else{
      console.log(Er)
      alert(Er,"error here")}
    })
  }

  return (
    <>
  <div className='flex justify-center items-center h-screen  bg-cover bg-[url("https://img.freepik.com/free-photo/wooden-table-with-blurred-background_1134-14.jpg?t=st=1720521525~exp=1720525125~hmac=349bf65147a300e7aa2ba5bc82725f7d3718765dce52830a79b6a53a5ff4ace4&w=1060")]'>
  
  <div className="modal-box border bg-opacity-75 shadow-md w-11/12 max-w-md dark:bg-slate-500 dark:text-white">
  <div className='flex justify-between'>
    <h3 className="font-bold text-lg">Signup !</h3>
    <Link to='/'>   <button className='btn'>Back </button></Link>
   
      
   
    </div>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <div className="mt-4 space-y-2 py-1">
   
       <span>Name</span><br/>
       <input type='text' placeholder='Name' name='fullname' className='w-80 h-10 dark:bg-slate-600 dark:text-white px-3 outline-none border rounded-md'  {...register("fullname", { required: true })}></input> 
    <br/>   {errors.fullname && <span  className='text-sm text-red-600 '>This field is required</span>}
    </div>
    <div className="mt-4 space-y-2 py-1">
   
       <span>Email</span><br/>
       <input type='email' placeholder='enter your email' className='w-80 h-10 dark:bg-slate-600 dark:text-white px-3 outline-none border rounded-md'  {...register("email", { required: true })}></input> 
     <br/>  {errors.email && <span  className='text-sm text-red-600 '>This field is required</span>}
    </div>
    <div className="mt-4 space-y-2 py-1">
   
       <span>Password</span><br/>
       <input type='text' placeholder='Password' className='dark:bg-slate-600 h-10 dark:text-white w-80 px-3 outline-none border rounded-md'  {...register("password", { required: true })}></input> 
      <br/> {errors.password && <span  className='text-sm text-red-600 '>This field is required</span>}
    </div>
    {/* adress */}
    <div className="mt-4 space-y-2 py-1">
   
       <span>address</span><br/>
       <textarea type='textarea' placeholder='' className='dark:bg-slate-600 h-36 dark:text-white w-80 px-3 outline-none border rounded-md'  {...register("address", { required: true })}></textarea> 
      <br/> {errors.address && <span  className='text-sm text-red-600 '>This field is required</span>}
    </div>
    {/* till here */}
    <input type='submit' value="Signup" className='btn bg-pink-500 text-white py-1 py-0 w-24 mt-2'/>
    </form>
    <div className='mt-4 space-y-2 py-1 flex justify-between'>
      
    {/* <Link to='/login' className='cursor-pointer underline text-blue-500'>Login</Link> */}
    </div>
    
  </div>


  </div>
    </>
  )
}
