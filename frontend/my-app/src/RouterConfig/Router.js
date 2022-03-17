import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import Signup from '../Pages/Signup/Signup';

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

