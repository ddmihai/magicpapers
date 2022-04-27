import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Blog.css'
import { BsCaretDown } from 'react-icons/bs';
import { BlogDropDown } from './BlogDropDown/BlogDropDown';
import { BlogDefaultPosts } from '../../FragmentComponnts/BlogPreviewDefaultPosts/BlogDefaultPosts';


export const Blog = () => {


const [blogDropdown, seetBlogDropDown] = useState(false);
const [blogList, setBlogList] = useState([]);

const [posts, setPosts] = useState([]);


const getAllBlogsURL = 'http://localhost:3000/api/admin-get-all-blogs';
const getFirstPosts  = 'http://localhost:3000/api/admin-get-posts-from-blog/' + 5;


const getBlogList = async () => {
  try {
    const res = await axios.get(getAllBlogsURL);
    setBlogList(res.data);
  } 
  catch (error) {
    console.log(error);
  }
}


const getFirstPostss = async () => {
  try {
    const response = await axios.get(getFirstPosts);
    setPosts(response.data);
  } 
  catch (error) {
    console.log(error);
  }
}


// Use effect and dependencies
useEffect(() => {
  getBlogList();
  getFirstPostss();
}, []);



  return (
    <main className='blogMainWrapper'>
        

        <aside className="listBlogWrapper">
          <div className="blogLeft">
          <div className="wellcomeToBlogsCat">
          <h3>Blog categories</h3>
          <BsCaretDown size={23} style={{marginLeft: '12px', cursor: 'pointer'}} onClick={() => seetBlogDropDown(value => !value)}/>  
          </div> 
            {/* Blog dropdown */}
            {
              blogDropdown && <BlogDropDown blogListsElements={blogList} />
            }
          </div>
        </aside>
        
        {/* Send default posts to component */}
        <BlogDefaultPosts posts={posts} />

    </main> 
  )
}
