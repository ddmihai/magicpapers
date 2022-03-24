import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const URL = 'http://localhost:3000/api/login-user';
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    
    try {
      const user = await axios.post(URL, {
        email: userEmail,
        password: userPassword
      });

      sessionStorage.setItem('user', JSON.stringify(user.data));

      if (user.data.admin) {
        navigate('/admin-dashboard');
      }
      else {
        navigate('/user-dashboard');
      }

    } 
    catch (error) {
        if (error.response.status === 404) alert('Wrong credentials');
        else alert('Something went wrong');
    }

  }


  return (
    <main className='loginMain'>
        <section className="centeredLogin">
          <h1 className='wellcomeLogin'>Login</h1>
          <p className='introLogin'>Please enter yor details bellow</p>
          
          <form className='loginForm' onSubmit={handleLogin}>
            <div className="inputLogin">
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              name='email' 
              value={userEmail}
              onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="inputLogin">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              name='password' 
              value={userPassword}
              onChange={e => setPassword(e.target.value)}/>
            </div>

            <button type='submit'>Login</button>
          </form>
        </section>
    </main>
  )
}
