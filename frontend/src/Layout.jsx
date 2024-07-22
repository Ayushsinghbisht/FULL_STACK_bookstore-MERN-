import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Layouts/Home'
import { Contact } from './Layouts/Contact'
import { Login } from './Layouts/Login'
import { Navbar } from './Layouts/Navbar'
import { About } from './Layouts/About'
import { Banner } from './Layouts/Banner'
import { Footer } from './Layouts/Footer'
import { FreeBooks } from './Layouts/FreeBooks'
import { Course } from './Layouts/Course'


export const Layout = () => {
  return (
    <>

  <div className='dark:bg-slate-500 dark:text-white'> 

    <Navbar/>
    
  
    <Outlet/>
   
        
     
    <Footer />
    
    </div>
    
    </>
  )
}
