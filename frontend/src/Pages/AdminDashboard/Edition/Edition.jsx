import axios from 'axios';
import React, { useState } from 'react'
import './Edition.css'







export const Edition = ({userID, token, closeForm}) => {
  
    const [editionTitle, setEditionTitle] = useState('');
    const addEditionURL = 'http://localhost:3000/api/admin/create-edition';
    
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const handleAddEdition = async e => {
        e.preventDefault();
        try {
            await axios.post(
                addEditionURL, {
                    userID,
                    title: editionTitle
                },
                config
            );
            
            alert('New edition has been addded');
            closeForm(v => !v);
        } 
        catch (error) {
            console.log(error);
            
        }
   } 

    return (
    <form className='editionAddForm' onSubmit={handleAddEdition}>
        <input type="text" name="editionTitle" id="editionTitle"
            onChange={e => setEditionTitle(e.target.value)}
            placeholder='Edition title' />

        <input type="submit" value="Add edition" />
    </form>
  )
}
