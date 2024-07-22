import React from 'react'
import list from '../../public/Booklist.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Cards } from './Cards';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const FreeBooks = () => {
const isloggedin=useSelector((state)=>state.auth.isloggedin)

  const [book,setbook]=useState([])
  useEffect(()=>{

const getbook=async()=>{
try{
const res=await axios.get("http://localhost:3000/course")

setbook(res.data)
}catch(err){
  console.log(err)
}
}

getbook()

  },[])


    let filterdata=book.filter((data)=>{
        return data.category === 'Free';
    })

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      // const showbook=(e)=>{
      //   console.log(e.key)
      //   return <Link to={`/getbookbyid${e}`}/>
      // }
   
  return (
    <>
   
    <div className='max-w-screen-2xl dark:bg-slate-500 dark:text-white container  mx-auto md:px-20 px-4 mx-3 mt-0'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Books available</h1>
        <p>Enjoy a selection of free books available to download and read. Dive into timeless classics and new favorites without spending a dime!  Our collection includes a variety of genres to suit every reader's taste. Start your literary journey today and explore these amazing titles at no cost!</p>
        </div>
        <div className='dark:bg-slate-500 dark:text-white'>
    <div className="slider-container">
    {
        isloggedin=="true" && (
      <Slider className='blue-500 ' {...settings}>
      
       
        {filterdata.map((item)=>{
          return(

            

              <Link to={`/getbookbyid/${item._id}`} >
                <div  ><Cards key={item.id} item={item} /></div>
                </Link>)
        })
      }

   
   
      </Slider>
         )    }
    {
        isloggedin=="false" && (
      <Slider className='blue-500 ' {...settings}>
      
       
        {filterdata.map((item)=>{
          return(

            

              <Link to="/Signup" >
                <div  ><Cards key={item.id} item={item} /></div>
                </Link>)
        })
      }

   
   
      </Slider>
         )    }
    </div>
    </div>
   
    </div>
    
    </>
  )
}

