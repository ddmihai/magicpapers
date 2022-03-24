import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Login } from '../Pages/Login/Login'
import { AdminDashboard } from '../Pages/AdminDashboard/AdminDashboard'
import { Products } from '../Pages/Products/Products'
import { Signup } from '../Pages/Signup/Signup'
import { Blog } from '../Pages/Blog/Blog'
import { BasicDashboard } from '../Pages/BasicDashboard/BasicDashboard'


export const Router = () => {
  return (
    <div>
        <Routes>

            <Route path='/' index element={<Home />}/> 
            <Route path='/about' element={<About />}/>   
            <Route path='/login' element={<Login />}/>
            <Route path='/admin-dashboard' element={<AdminDashboard />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/user-dashboard' element={<BasicDashboard />} />

        </Routes>        
    </div>
  )
}
