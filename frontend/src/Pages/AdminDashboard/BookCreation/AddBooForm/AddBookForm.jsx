import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddBookForm.css'



export const AddBookForm = ({genereID, editionID}) => {

const user      = JSON.parse(sessionStorage.getItem('user'));
const userID    = user.userID;
const token     = user.token; 

// Form states
const [title, setTitle] = useState('');
const [subtitle, setSubTitle] = useState('');
const [quantity, setQuantity] = useState('');
const [condition, setCondition] = useState('');
const [description, setDescription] = useState('');
const [pages, setPages] = useState('');
const [price, setPrice] = useState('');
const [author, setAuthor] = useState('');

const navigate = useNavigate();
const addBookURL = 'http://localhost:3000/api/admin/create-book';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const payload = {
    userID,
    editionID,
    genereID,
    title,
    subtitle, 
    quantity, 
    book_condition: condition,
    description,
    pages,
    price,
    authors: author
};


const handleAddNewBook = async e => {
    e.preventDefault();
    try {
        const statusNewBook = await axios.post(addBookURL, payload, config);
        if (statusNewBook.status === 201) {
            alert('Book created. Please add a book Image.');
            navigate('/admin-add-book-img');
            
        }
    } catch (error) {
        console.log(error);
    }
}



// Actual form component
  return (
    <form className='addFormBook' onSubmit={handleAddNewBook}>

        <div className="formBookInputWrapper">
            
        <div className="inputBook">
            <label htmlFor="title">Title: *</label>
            <input type="text" 
                value={title}
                placeholder='Book title...'
                onChange={e => setTitle(e.target.value)}
                required />
        </div>

        <div className="inputBook">
            <label htmlFor="subtitle">Subtitle: *</label>
            <input type="text" 
                value={subtitle}
                placeholder='Book subtitle...'
                onChange={e => setSubTitle(e.target.value)}
                required />
        </div>

        <div className="inputBook">
            <label htmlFor="quantity">In stock: *</label>
            <input type="number" 
                value={quantity}
                placeholder='Qty...'
                onChange={e => setQuantity(e.target.value)}
                required />
        </div>

        <div className="inputBook">
            <label htmlFor="condition">Condition: *</label>
            <input type="text" 
                value={condition}
                placeholder='Book condition...'
                onChange={e => setCondition(e.target.value)}
                required />
        </div>

        <div className="inputBook">
            <label htmlFor="description">Description: *</label>
            <input type="text" 
                value={description}
                placeholder='Book desciption...'
                onChange={e => setDescription(e.target.value)}
                required />
        </div>

        <div className="inputBook">
            <label htmlFor="pages">Pages: *</label>
            <input type="number" 
                value={pages}
                placeholder='Pages...'
                onChange={e => setPages(e.target.value)}
                required/>
        </div>

        <div className="inputBook">
            <label htmlFor="price">Price: *</label>
            <input type="number" 
                value={price}
                placeholder='Price...'
                onChange={e => setPrice(e.target.value)}
                required/>
        </div>

        <div className="inputBook">
            <label htmlFor="author">Author: *</label>
            <input type="text" 
                value={author}
                placeholder='Book author...'
                onChange={e => setAuthor(e.target.value)}
                required/>
        </div>

        </div>
        <p className="warningAddBook">Please make sure you completed all the fields in the form.</p>
        <input type="submit" className='addBookButton' value="Add bok" />
        
    </form>
  )
}
