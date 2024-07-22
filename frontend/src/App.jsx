import { Link, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Layouts/Home";
import { Login } from "./Layouts/Login";
import { Contact } from "./Layouts/Contact";
import { Course } from "./Layouts/Course";
import { About } from "./Layouts/About";
import { Banner } from "./Layouts/Banner";
import { Signup } from "./Layouts/Signup";
import { useAuth } from "./Context/AuthProvider";
import { Bookdata } from "./Layouts/Bookdata";
import { Cart } from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authactions } from "./store/Auth";
import { OrderHistory } from "./Layouts/OrderHistory";
import { Setting } from "./Layouts/Setting";
import {AdminProfile} from "./Layouts/AminProfile";
import { Addbooks } from "./Layouts/Addbooks";
import { Allorders } from "./Layouts/Allorders";
import { Updatebook } from "./Context/Update";


export default function App() {
const dispatch=useDispatch();
const [authuser,setauthuser]=useAuth()
  // console.log("my manisha is :",authuser)

useEffect(()=>{
 

  if(authuser)
  {
    // console.log("inside user")
    dispatch(authactions.login())
    dispatch(authactions.changestate(authuser.role))
    
  }

},[])

const isloggedin=useSelector((state)=>{return state.auth.isloggedin})
const Role=useSelector((state)=>state.auth.role)
  return (
   <>
 <div className='dark:bg-slate-500 dark:text-white'>
{/* <BrowserRouter> */}
          <Routes className='dark:bg-slate-500 dark:text-white'>
                <Route path='/' element={<Layout/>} >
                {/* <Route path="/" element={<Banner/>}></Route> */}
                <Route index element={<Banner />} />
                <Route path='/Home' element={<Banner/>} ></Route>
                <Route path="/updatebook/:id" element={ <Updatebook/> } />
                <Route path='/Contact' element={<Contact/>}>
                  <Route path="/Contact/OrderHistory" element={<OrderHistory/>}/>
                  <Route path="/Contact/Setting" element={<Setting/>}/>
                  <Route path="/Contact/addbooks" element={<Addbooks/>}/>
                  <Route path="/Contact/allorders" element={<Allorders/>}/>
                
                </Route>
                {/* <Route path="/AdminProfile" element={<AdminProfile/>}/> */}
                <Route path='/Course' element={authuser ||isloggedin=="true" ?<Course/>:<Navigate to="/signup"/>}></Route>
                {/* <Route path='/Course' element={<Course/>}></Route> */}
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/getbookbyid/:id' element={<Bookdata/>}/>
                </Route>
                <Route path="/Signup" element={<Signup/>}></Route>

          </Routes>

        {/* </BrowserRouter> */}
        </div>
   </>
  )
}