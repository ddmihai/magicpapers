import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './TicketDetails.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


export const TicketDetails = () => {
    
    const tiketID           = sessionStorage.getItem('selectedTicket');
    const user              = JSON.parse(sessionStorage.getItem('user'));
    const ticketURL         = 'http://localhost:3000/api/get-one-ticket/' + tiketID;
    const delteTicket       = 'http://localhost:3000/api/delete-ticket';
    
    const [ticketDet, setTicketDet] = useState({});
    const [sideMenu, setSideMenu] = useState(false);

    const time = new Date(ticketDet.response_time).toLocaleString();
    const navigate = useNavigate();

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
      }; 

    // AXIOS 2 functions bellow
    const getTicketDetails  = async () => {
       try {
          const ticketResult = await axios.get(ticketURL, tiketID, config);
          setTicketDet(ticketResult.data[0]);
       } catch (error) {
           console.log(error);
       }
    } 

    const deleteTicketAxios = async () => {
        try {
            await axios.delete(delteTicket, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },

                data: {
                    tiketID: tiketID,
                    userID: user.userID
                }
            });
            // Execute this if req is success
            alert('Ticket deleted');
            navigate('/user-dashboard');

        } catch (error) {
            console.log(error);
        }
    }
   
    // Useeffect
    useEffect(() => {
        getTicketDetails()
    }, [])


    return (
    <main className='mainTicketDetaisl'>
        <h1 className="ticketDetailsTitle">Ticket detalil</h1>
        <section className="mainTicketWrapper">

        <aside className="ticketDetailsMenu">
            <HiMenuAlt4 size={27} style={{margin: '10px'}} onClick={() => setSideMenu(v => !v)}/>

            {/* Render conditionally the  */}
            {!sideMenu ? null : 
            (<div className='sideOPtionsTicket'>
                <button onClick={deleteTicketAxios}>Delete</button>
            </div>)}
        </aside>

        <aside className="ticketDetailsInfo">
            <p className="ticketContext">{ticketDet.content}</p>
            {
                ticketDet.response ? 
                <p className="adminAnswer">Admin: &nbsp; {ticketDet.response}</p> :
                <p className="adminInformation"> An admin will respond shortly.</p>
            }
            {
                ticketDet.response && <p className="responseDetails">Add time: {time}</p>
            }
        </aside>
        </section>
    </main>
  )
}
