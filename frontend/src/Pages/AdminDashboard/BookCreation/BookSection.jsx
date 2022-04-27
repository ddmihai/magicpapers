import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AddBookForm } from './AddBooForm/AddBookForm';
import './BookSection.css'




export const BookSection = () => {

    const [generesList, usetGenereList] = useState([]);
    const [editionList, setEditionList] = useState([]);
    
    // This values will be used on the form Add book
    const [genereSelector, setGenere] = useState('');
    const [editionSelector, setEdition] = useState('');


    const genereListURL = 'http://localhost:3000/api/admin/get-generes';
    const getEditions   = 'http://localhost:3000/api/admin-get-editions';

    // get generes list
    const getGeneres = async () => {
        try {
            const generes = await axios.get(genereListURL);
            usetGenereList(generes.data);
        } 
        catch (error) {
            console.log(error); 
        }
    }

    // Get edition list
    const getEditionsAxios = async () => {
        try {
            const editions = await axios.get(getEditions);
            setEditionList(editions.data);
        } 
        catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        getGeneres();
        getEditionsAxios();
    }, []);


  return (
    <main className='bookAdminAdd'>
        <h1>Add a new book</h1>
        <p className='addBookAdminWarning'>Before adding a book please make sure that you allready have registered the edition and genere associated with this book.</p>
         
        <div className="dropDownsSelections">   
        <select name="generes" id="genereDropDown" 
            onChange={e => setGenere(e.target.value)}>
            <option>Genere</option>
            {generesList.map(gen => (
                    <option key={gen.genereID} value={gen.genereID}>{gen.genere_name}</option>
                ))}
        </select>

        <select name="editions" id="editionDropdown" 
            onChange={e => setEdition(e.target.value)}>
            <option>Edition</option>
            {editionList.map(edition => (
                    <option key={edition.editionID} value={edition.editionID}>{edition.title}</option>
                ))}
        </select>
        </div>

        <AddBookForm genereID={genereSelector} editionID={editionSelector} />
        
    
    </main>
  )
}
