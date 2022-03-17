import React, {useState} from 'react'
import axios from 'axios';

// CSS
import './LoginForm.css';

/* Main function */
const LoginForm = () => {

const [errMsj, seterrMsj] = useState('');
const [userEmail, setEmail] = useState('');
const [userPass, setPass] = useState('');
  
/* Variables */
const URL = 'http://localhost:3000/api/login-user';

const handleLogin = async e => {
    e.preventDefault();
    try {
        const user = await axios.post(URL, {email: userEmail, password: userPass});
        console.log(user.data);
    } catch (error) {
        if (error.response.status === 404) alert('Wrong credentials');
        else alert('Something went wrong');
    }
}



/* RETURN SECTION HERE */
  return (
    <div className="form">
    <div className="alternativeOption">
        <p>Or you can use email: </p>
    </div>

    <form className='loginForm' onSubmit={handleLogin}>
      <div className="inputContainer">
        <label>Username* </label>
        <input
            value={userEmail}
            onChange={e => setEmail(e.target.value)} 
            type="text" 
            name="email" 
            required />
      </div>

      <div className="inputContainer">
        <label>Password* </label>
        <input
            value={userPass}
            onChange={e => setPass(e.target.value)} 
            type="password" 
            name="password" 
            required />
      </div>

      <div className="loginBtn">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm