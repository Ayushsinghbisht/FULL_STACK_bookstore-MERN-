import React from 'react'
import list from '../../public/Booklist.json'

export const Home = () => {

    let filterdata=list.filter((data)=>{
        return data.category === 'Free';
    })
   
  return (
    <>
    <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4 fixed top-0 left-0 right-0'>
        <h1>Free Books available</h1>
        
    </div>
    
    </>
  )
}
