import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Ticket } from './Ticket/Ticket';
import './TicketsComponent.css'
import { BiCommentAdd } from 'react-icons/bi';
import { CreateTicketForm } from './CreateTicketForm/CreateTicketForm';


export const TicketsComponent = ({user}) => {
  const userID = user.userID;
  const [tickets, setTickets] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const URL_TICKETS_BY_USERID = 'http://localhost:3000/api/get-tickets/' + JSON.parse(userID);
  const config = {headers: { Authorization: `Bearer ${user.token}` }};
 
  
//   Get tickets and find the ones matching the author's ID
  const fetchTickets = async () => {
        await axios.get(URL_TICKETS_BY_USERID, userID, config)
        .then(data => {
            setTickets(data.data)})
        .catch(error => console.log(error))
  }  

  //   Run when component first time renderd;
  useEffect(() => {
    fetchTickets();
    // eslint-disable-next-line
  },
  [visibleForm]); 


// Main component renderedd
  return (
    <section className='ticketsSection'>
        <h3>My tickets</h3>
        <div className="ticketWrapper">
            {tickets.map(ticket => (
                <Ticket tickets={ticket} key={ticket.tiketID}/>
            ))}
        </div>

        {/* Add ticket form */}
        <section className="addTicket">
          <p className="addNewTicket">Add new ticket <BiCommentAdd 
          color='#fa8100' 
          style={{marginLeft: '15px'}}
          onClick={() => setVisibleForm(v => !v)} size={25}/></p>
          {
            // Sent as props userID and main create method HERE I SEND THE FETCH COMPONENT IN THE CHILD
            visibleForm && <CreateTicketForm userID={userID} reloadTickets={fetchTickets} closeForm={setVisibleForm}/>
          }
        </section>
    </section>
  )
}
