import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './TicketDetailsAdmin.css'
import { useNavigate } from 'react-router-dom';

export const TicketDetailsAdmin = () => {
    
    const tiketID           = sessionStorage.getItem('selectedTicket');
    const user              = JSON.parse(sessionStorage.getItem('user'));
    const ticketURL         = 'http://localhost:3000/api/get-one-ticket/' + tiketID;
    const updateTicketURL   = 'http://localhost:3000/api/admin/update-ticket';
    const navigate          =  useNavigate();

    const [ticketDet, setTicketDet] = useState({});
    const time = new Date(ticketDet.created_time).toLocaleDateString()
    const [adminResponse ,setAdminResponse] = useState('');

    // AXIOS CONFIGS
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
      }; 

    const postAdminResponse = {
        userID: user.userID,
        tiketID,
        response: adminResponse 
    }

    // Axios get ticket details
    const getTicketDetails  = async () => {
        try {
           const ticketResult = await axios.get(ticketURL, tiketID, config);
           setTicketDet(ticketResult.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    // Axios send admin response
    const handleAdminResponse = async e => {
        e.preventDefault();
        try {
            const response = await axios.put(updateTicketURL, postAdminResponse, config);
            if (response.status === 201) {
                alert('Response to ticket NR: ' + tiketID + ' added.');
                navigate('/admin-dashboard');

            } 
        } catch (error) {
            console.log(postAdminResponse);
        }
    }


    // Useeffect
    useEffect(() => {
        getTicketDetails()
    }, [])

  return (
    <main className='adminEditTicket'>  
        <h1>Ticket nr: {ticketDet.tiketID}</h1>
        <p>Created on: {time}</p>
        <p className="adminWarning">Please be aware that once you respond to a ticket, it will dissapear from your list</p>
        <p className="userContentProblem">{ticketDet.content}</p>

        <form onSubmit={handleAdminResponse}>
            <textarea 
                name="adminResponseArea" 
                id="adminResponseArea" 
                cols="30" 
                rows="10"
                placeholder='Please write response here...'
                value={adminResponse}
                onChange={e => setAdminResponse(e.target.value)} />

            <input type="submit" value='Add response ' />
        </form>
    </main>
  )
}
