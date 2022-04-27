import React from 'react';
import { BsCaretDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import './Ticket.css';

export const Ticket = ({tickets}) => {

  let navigate = useNavigate();
  let dateCreated = new Date(tickets.created_time)
   let time = {
       day: dateCreated.getDate(),
       month: dateCreated.getMonth() + 1,
       year: dateCreated.getFullYear()
   }

   const getTicketDetails = (id) => {
        sessionStorage.setItem('selectedTicket', id);
        navigate('/ticket-details');
   }

  return (
    <section className='ticketCreated'>
        <div className="headerTicket">
            <p className="dateCreated">Created:  {time.day}/{time.month}/{time.year} </p>
            <BsCaretDown size={20}/>
        </div>
        <div className="bodyTicket">
            {tickets.content}
        </div>
        <div className="ticketFooter">
            <button onClick={() => getTicketDetails(tickets.tiketID)} className='getTicketDetails'>Details</button>
        </div>
    </section>
  )
}

