import React from 'react'
import LoginForm from '../../Forms/LoginForm/LoginForm'
import './Login.css';
import { BsFillLightningChargeFill, BsFacebook } from "react-icons/bs";

 const Login = () => {

// 


  return (
    <main className='mainPageLogin'>
      {/* left */}
      <section className="mainLeft">
        <div className="titleLogin">
          <div className="centeredLeft">
            <BsFillLightningChargeFill color='#4527A0' size={40}/>
            <h1 className='headingLogin'>Login</h1>
            <p>Type your details and start your journey</p>
          </div>

          <div className="commingSoon">
            <button type="submit" className='disabledBtn'>
                Login with facebook <BsFacebook color='#0D47A1' size={20} style={{marginLeft: '10px'}}/>
            </button>
          </div>
        </div>

        {/* The login form belongs to other DIV */}
        <LoginForm />
      </section>

      {/* Right */}
      <section className="mainRight">

      </section>
    </main>
  )
}


export default Login