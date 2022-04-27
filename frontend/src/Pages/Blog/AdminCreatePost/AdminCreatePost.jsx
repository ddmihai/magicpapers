import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AdminCreateBlog } from '../AdminCreateBlog/AdminCreateBlog';
import './adminCreatePost.css'
import { CreatePostForm } from './CreatePostForm';


export const AdminCreatePost = () => {
    
    const [blogCategory, setBlogCategory] = useState(false);
    const [blogLst, setBlogList] = useState([]);
    const [blogsDropdown, setBlogDropdown] = useState('');

    const user = JSON.parse(sessionStorage.getItem('user'));
    const userID = user.userID;
    const token = user.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const getBlogListURL = 'http://localhost:3000/api/admin-get-all-blogs';
    

    // This function will be triggered every time the user uses the form and the blogCategory state is changed
    const getAllBlogsFromBackend = async () => {
        try {
            const list = await axios.get(getBlogListURL);
            setBlogList(list.data)
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
        getAllBlogsFromBackend();
    },
    [blogCategory]);

    
    
    return (
    <main className='adminCreatePostMain'>
        <h1 className='WellcomeAdminCreateNewPost'>Create new blog post</h1>
        <p className="createNewBlogpostWarning">If you do not a blog category created, please create one now before starting to write to the post text</p>      

         <button onClick={() => setBlogCategory(v => !v)}>Create new blog category here</button>   
            { 
                blogCategory && <AdminCreateBlog userID={userID} config={config} closeForumCat={setBlogCategory}/>
            }

        
        <div className="selectBlogCats">
            <h4>Please select the blog category first</h4>
            <select name="blogCatListsSelect" onChange={e => setBlogDropdown(e.target.value)}>
                <option>Select a blog</option>
                {
                    blogLst.map(blog => (
                        <option key={blog.blogID} value={blog.blogID}>{blog.title}</option>
                    ))
                }
            </select>
        </div>

        <CreatePostForm userID={userID} config={config} blogsDropdownID={blogsDropdown}/>
    </main>
  )
}

