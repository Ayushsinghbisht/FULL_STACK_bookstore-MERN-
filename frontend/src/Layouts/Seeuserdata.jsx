import React from 'react'

export const Seeuserdata = ({userdivdata,userdiv,setuserdiv}) => {
  return (
    <>
    <div className={`${userdiv} top-0 left-0 h-screen w-full bg-zinc-800 opacity-80 items-center justify-center`}>
   <div className='bg-white flex flex-col items-center mt-[20vh]  text-black font-semibold text-xl w-[40vw] ml-[20vw]'>
   <div>{userdivdata.fullname}</div>
    <div>{userdivdata.address}</div>
    <div>{userdivdata.email}</div>
    
   </div>
   <button className='bg-yellow-400 text-black p-2 ml-[40vw] font font-semibold' onClick={()=>{setuserdiv("hidden")}}>Okay</button>
    </div>
    
    </>
  )
}
