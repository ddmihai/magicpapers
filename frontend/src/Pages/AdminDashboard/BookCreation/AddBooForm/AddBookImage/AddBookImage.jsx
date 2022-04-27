import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddBookImage.css'




export const AddBookImage = () => {

    const [selectedBookID, setSelectedBookID] = useState();
    const lastBookURL = 'http://localhost:3000/api/admin/get-last-book';
    const addBookImgURL = 'http://localhost:3000/api/admin/add-book-picture';
    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();


    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    const getThisBook = async () => {
        try {
            const lastBook = await axios.get(lastBookURL);
            setSelectedBookID(lastBook.data[0].bookID);
        } catch (error) {
            console.log(error);
        }
    }

    const uploadImageBook = async files => {
       const formData = new FormData();
       formData.append('userID', user.userID);
       formData.append('bookID', selectedBookID); 
       formData.append('image', files[0]);

        try {
            await axios.post(addBookImgURL, formData, config);
        } catch (error) {
            console.log(error);
        }
    }


    // Useeffect
    
    useEffect(() => {
        getThisBook();
    }, []);


  return (
    <form className='AddBookNewImage'>
        <h1>Add photo for the lastest book</h1>
        <p>Please note that this form will asign a photo to the book you uploaded earlier. To assign a photo to another book, please browse the Book
            manually.
        </p>

        <input type="file" name="image" id="imageAvatar" onChange={e => uploadImageBook(e.target.files)}/>
    
        <p className="ImageBookUploadWarning">Please note that once you choose a file, the book will be uploaded automatically. If you want to add multiple
        files, please repeat the process.</p>
        <button className='adminBackToDashboard' onClick={() => navigate('/admin-dashboard')}>Return to dashboard</button>
    </form>
  )
}
