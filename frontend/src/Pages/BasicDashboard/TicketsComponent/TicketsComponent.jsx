import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Ticket } from './Ticket/Ticket';
import './TicketsComponent.css'


export const TicketsComponent = ({user}) => {
  const userID = user.userID;
  const [tickets, setTickets] = useState([]);
  const URL_TICKETS_BY_USERID = 'http://localhost:3000/api/get-tickets/' + JSON.parse(userID);
  const config = {headers: { Authorization: `Bearer ${user.token}` }};
 
  
//   Get tickets and find the ones matching the author's ID
  const fetchTickets = () => {
        axios.get(URL_TICKETS_BY_USERID, userID, config)
        .then(data => {
            setTickets(data.data)})
        .catch(error => console.log(error))
  }  

//   Run when component first time renderd;
  useEffect(() => {
    fetchTickets();
    // eslint-disable-next-line
  },
  []); 


// Main component renderedd
  return (
    <section className='ticketsSection'>
        <h3>My tickets</h3>
        <div className="ticketWrapper">
            {tickets.map(ticket => (
                <Ticket tickets={ticket} key={ticket.tiketID}/>
            ))}
        </div>
    </section>
  )
}
