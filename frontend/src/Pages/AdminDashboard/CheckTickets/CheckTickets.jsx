import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './CheckTickets.css'
import { TicketIndividual } from './TicketIndividual/TicketIndividual';





export const CheckTickets = () => {

const GetALLTickets = 'http://localhost:3000/api/get-all-tickets';
const [ticketList, setTicketList] = useState([]);


const getAllTickets = async () => {
    try {
        const ticketLists = await axios.get(GetALLTickets);
        setTicketList(ticketLists.data);
    }
    catch (error) {
        console.log(error);
    }
}


useEffect(() => {
    getAllTickets()
},
[]);




  return (
    <main className='adminCheckTickets'>
        <h3>Created tickets</h3>
        <div className="ticketWrapperAdmin">
            {
                ticketList && ticketList.map(ticket => (
                    <TicketIndividual ticket={ticket} key={ticket.tiketID}/>
                ))
            }
        </div>
    </main>
  )
}
