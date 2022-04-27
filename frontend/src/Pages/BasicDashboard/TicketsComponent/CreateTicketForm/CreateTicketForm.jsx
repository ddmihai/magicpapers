import axios from 'axios';
import React, { useState } from 'react'
import './CreateTicketForm.css'


export const CreateTicketForm = ({userID, reloadTickets, closeForm}) => {
    
    const [ticketArea, setTicketArea] = useState('');
    const postTicketURL = 'http://localhost:3000/api/create-ticket';
    const token = JSON.parse(sessionStorage.getItem('user'));
    
    const configHeader = { headers: { 
        Authorization: `Bearer ${token.token}`
     }}

      // Create a new Ticket
    const createTicket = async e => {
        e.preventDefault();
        
        try {
            await axios.post(postTicketURL, {
                userID: userID,
                content: ticketArea
            },  
                configHeader)

                closeForm(v => !v);
                await reloadTickets();
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <form className='addTicketForm' onSubmit={createTicket}> 
        
        <textarea name="ticket" 
            id="ticketArea" 
            cols="30" 
            rows="10" 
            placeholder='Write your problem here'
            value={ticketArea}
            onChange={e => setTicketArea(e.target.value)}/>
        <input type="submit" value="Create" />

    </form>
  )
}
