import React, { useState } from 'react'
import './PersonalDetails.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const PeronalDetails = ({user}) => {

const [fName, setFName] = useState(user.first_name);
const [lName, setLname] = useState(user.last_name);
const [password, setPassword] = useState('');
const [age, setAge] = useState(user.age);
const [gender, setGender] = useState(user.gender);
const navigate = useNavigate();
const URL = 'http://localhost:3000/api/edit-user';

// Login function
const handleUpdateUser = async e => {
    e.preventDefault();
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    try {
        await axios.put(URL,{
            userID: user.userID,
            first_name: fName,
            last_name: lName,
            password,
            age,
            gender
        },
        config)    
        
        // Navigate back to login page
        navigate('/login');
        sessionStorage.removeItem('user');
    } 
    catch (error) {
        alert('Something went wrong')
    }
}

// Render
    return (
        <section className='personalDetailsDisplays'>
            <h3>Personal details</h3>  

            <form className="displayAndEdit" onSubmit={handleUpdateUser}>
                {/* <p className="titleUpdate">Account Information</p> */}

                <div className="inputWrapperUpdate">
                    <label htmlFor="fName">First name</label>
                    <input type="text"
                        id='fName' 
                        required
                        name="fName" 
                        value={fName}
                        onChange={e => setFName(e.target.value)}/>
                </div>

                <div className="inputWrapperUpdate">
                    <label htmlFor="lName">Last name</label>
                    <input type="text"
                        id='lName' 
                        required
                        name="lName" 
                        value={lName}
                        onChange={e => setLname(e.target.value)}/>
                </div>

                <div className="inputWrapperUpdate">
                    <label htmlFor="password">New password</label>
                    <input type="password"
                        id='password' 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="inputWrapperUpdate">
                    <label htmlFor="gender">Gender</label>
                    <select 
                        name="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="inputWrapperUpdate">
                    <label htmlFor="age">New age</label>
                    <input type="number" 
                        required
                        name="age" 
                        value={age}
                        onChange={e => setAge(e.target.value)}/>
                </div>
            
            <button type="submit">Update</button>
            </form>    
            <p className="importaneUpdate">
                Please note that you will be logged out when you will make a change in your prtofile.
            </p>             
        </section>
  )
}
