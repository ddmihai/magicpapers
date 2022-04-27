import axios from 'axios';
import React, { useState } from 'react'
import './AdminCreateBlog.css'





export const AdminCreateBlog = ({userID, config, closeForumCat}) => {

    const CreateBlogURL = 'http://localhost:3000/api/admin/create-blog';
    const [blogTitle, setBlogTitle] = useState('');
    const [blogsubtitle, setBlogSubtitle] = useState('');


    const handleBlogCategory = async e => {
        e.preventDefault();
        try {
            const newCatStatus = await axios.post(CreateBlogURL, {
                userID,
                title: blogTitle,
                subtitle: blogsubtitle
            },
            config);    
            if (newCatStatus.status === 201) {
                alert('Blog category added');
                closeForumCat(v => !v);
            }
        } 
        catch (error) {
            console.log(error);
        }
    }


  return (
    <form className='blogNewAddForm' onSubmit={handleBlogCategory}>

        <h4>Add new blog category here</h4>

        <div className="inputFormNewBlog">
            <label htmlFor="titleBlog">Title</label>
            <input type="text" name="titleBlog" id="titleBlog"
            value={blogTitle}
            placeholder='New blog category title'
            onChange={e => setBlogTitle(e.target.value)}
            required />
        </div>

        <div className="inputFormNewBlog">
            <label htmlFor="blogsubtitle">Subtitle</label>
            <input type="text" name="blogsubtitle" id="blogsubtitle"
            value={blogsubtitle}
            placeholder='New blog category subtitle'
            onChange={e => setBlogSubtitle(e.target.value)}
            required />
        </div>

        <input className='addBlogCategoryBtn' type="submit" value='Add Category' />
    </form>
  )
}
