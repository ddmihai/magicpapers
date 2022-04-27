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
import { TicketDetails } from '../Pages/BasicDashboard/TicketDetails/TicketDetails'
import { TicketDetailsAdmin } from '../Pages/AdminDashboard/CheckTickets/TicketDetails/TicketDetails'
import { BookSection } from '../Pages/AdminDashboard/BookCreation/BookSection'
import { AddBookImage } from '../Pages/AdminDashboard/BookCreation/AddBooForm/AddBookImage/AddBookImage'
import { AdminCreatePost } from '../Pages/Blog/AdminCreatePost/AdminCreatePost'



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
            <Route path='/ticket-details' element={<TicketDetails />} />
            <Route path='/ticket-details-admin' element={<TicketDetailsAdmin />} />
            <Route path='/admin-add-book' element={<BookSection />} />
            <Route path='/admin-add-book-img' element={<AddBookImage />} />
            <Route path='/admin-create-blogpost' element={<AdminCreatePost />} />
        </Routes>        
    </div>
  )
}
