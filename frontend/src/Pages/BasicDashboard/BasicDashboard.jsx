import React, { useState } from 'react'
import './BasicDashboard.css'
import { PeronalDetails } from './PersonalDetails/PeronalDetails'
import { RiUserSettingsLine } from "react-icons/ri";
import { AvatarComponent } from './AvatarComponent/AvatarComponent';
import updateAvatar from './UpdateAvatar';
import { useNavigate } from 'react-router-dom';
import { TicketsComponent } from './TicketsComponent/TicketsComponent';


export const BasicDashboard = () => {

  const user = JSON.parse(sessionStorage.getItem('user'));
  const [image, setImage] = useState({});
  const navigate = useNavigate();

  const handleAvatarUpdate = file => {
    let imgName = file[0];
    setImage(imgName);
  }

  const handleUploadImage = e => {
    e.preventDefault();
    updateAvatar(user, image);
    navigate('/login');
}


  return (
    <main className='basicDashboardMain'>
        <h1 className='dashboardWellcome'>Wellcome {user.first_name}</h1>
        <div className="informationDetails">
            {
                user.userAvatar ? 
                <AvatarComponent user={user} /> :
                <RiUserSettingsLine size={25} style={{marginRight: '20px'}} />
            }
               
            <div className="infoAndAvatar">
                <p>Find on this page the most useful info and settings</p>
                <input type='file' onChange={e => handleAvatarUpdate(e.target.files)} />
                <button onClick={handleUploadImage}>Upload</button>
            </div>
        </div>
        
        <PeronalDetails user={user} />
       {
        //  Render only if the user is not admin
        !user.admin &&  <TicketsComponent user={user} />
       }
    </main>
  )
}
