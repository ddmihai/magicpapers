import React, { useState } from 'react'
import { BasicDashboard } from '../BasicDashboard/BasicDashboard';
import { CheckTickets } from './CheckTickets/CheckTickets';
import './AdminDahsboard.css';
import { Genere } from './Genere/Genere';
import { Edition } from './Edition/Edition';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [genereBox, setgenereBox] = useState(false);
  const [editionBox, seteditionBox] = useState(false);

  const navigate = useNavigate();

  const navigateBook = () => navigate('/admin-add-book'); 

  return (
    <main>

      {/* Get the edit account elements same like the normal user */}
      <BasicDashboard />
      <CheckTickets />
      
      {/* Book section */}
      <section className='bookAddSection'>
          <h3>Book section</h3>

          {/* Genere, editions creations the entities will be visible by anable a dropdown */}
          <aside className="genereEdiionBox">
            <div className="genereEditionButtons">
              <button onClick={() => setgenereBox(v => !v)}>Add genere</button>
              <button onClick={() => seteditionBox(v => !v)}>Add edition</button>
              <button onClick={navigateBook}>Add book</button>
            </div>
            { genereBox   &&  <Genere userID={user.userID} token={user.token}  closeForm ={setgenereBox}/>}
            { editionBox  &&  <Edition userID={user.userID} token={user.token} closeForm ={seteditionBox}/>}

          </aside>
      
      </section>

      <section className="blogSectionAdmin">
        <h3>New blog post</h3>
        <button onClick={() => navigate('/admin-create-blogpost')}>Add blog post</button>
      </section>
    </main>
  )
}
