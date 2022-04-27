import React from 'react'
import { useNavigate } from 'react-router-dom';
import './TicketIndividual.css'

// This component uses basic details from the response but passes the whole object next to the detail page

export const TicketIndividual = ({ticket}) => {
  
    const date = new Date(ticket.created_time).toLocaleString();
    const navigate = useNavigate();
    
    const navigateToTocketDetails = () => {
        sessionStorage.setItem('selectedTicket', ticket.tiketID);
        navigate('/ticket-details-admin');
    }


    return (
    <main className='ticketIndividual' onClick={navigateToTocketDetails}>
        <p>{date}</p>
    </main>
  )
}
