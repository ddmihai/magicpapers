import axios from 'axios'
import React, { useState } from 'react'
import './Genere.css'



export const Genere = ({userID, token, closeForm}) => {
    
    // const [genereList, setGenereList] = useState([]);
    const [genereName, setGenereName] = useState('');
    const [disclaimer, setDisclaimer] = useState('');

    const createGenereURL = 'http://localhost:3000/api/admin/create-genere';
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const postGenere = async e => {
        e.preventDefault();

        try {
            await axios.post(
                createGenereURL,
                {
                    userID, 
                    genere_name: genereName,
                    disclaimer
                },
                config
            );

            alert('A new genere has been added. Please check the selector.');
            closeForm(v => !v);
        } 
        catch (error) {
            console.log(error);
        }        
    }


    // Ad genere form
    return (
    <section className='genereWrapperIndividual'>
        <form onSubmit={postGenere}>
            <input type="text" name="genere" id="genereName" 
                value={genereName}
                onChange={e => setGenereName(e.target.value)}
                placeholder=' Genere title'/>

            <textarea name="disclaimer" id="disclaimer" cols="30" rows="10"
                value={disclaimer}
                onChange={e => setDisclaimer(e.target.value)}
                placeholder=' Disclaimer here...' />
            
            <input type="submit" value="Add genere" />
        </form>
    </section>
  )
}
