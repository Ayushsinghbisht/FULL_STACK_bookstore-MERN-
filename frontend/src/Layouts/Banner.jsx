import React from 'react'
import { FreeBooks } from './FreeBooks'
import { Home } from './Home'

export const Banner = () => {
  function scrollByDistance() {
    window.scrollBy({
        top: 600, // Distance to scroll
        behavior: 'smooth'
    });
}

  return (
   <>
    <div className='main max-w-screen-2xl  container  mx-auto md:px-20 mt-10 md:mt-16 px-4 flex  flex-col md:flex-row'>
      <div className='w-full md:w-1/2  order-2 md:order-1 mt-5 md: mt-9' >
      <div className='space-y-6'>
      <h1 className='text-4xl  '>Hello,welcomes here to learn something<span className='text-green-500'> new everyday !!!</span></h1>
          <br/><p className='text-xl'>Welcome to Bookstore, your gateway to a world of stories, knowledge, and imagination. Discover a vast selection of books across all genres, from timeless classics to the latest bestsellers. Whether you're an avid reader or looking for a special gift, our carefully curated collection has something for everyone. Step into our store and embark on a literary adventure today!</p>
         
          <label className="input input-bordered outline flex items-center gap-2 dark:bg-slate-500 dark:text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
          </div>
          <button onClick={scrollByDistance} className="btn mt-3 btn-secondary">Get Started</button>
      </div>
      
      <div className='w-full md:w-1/2 order-1'>
      
      <img className='md:pb-0  h-3/4 ml-9' src="../public/banner.jpg"></img>

      </div>

        
    </div>

    <div className='dark:bg-slate-500 dark:text-white'>
    <FreeBooks/>
    </div>
   </>
  )
}
