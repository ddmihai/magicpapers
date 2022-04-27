import React, {useState, useEffect} from 'react'
import './adminCreatePost.css'


// Import quill dep and CSS
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreatePostForm = ({userID, config, blogsDropdownID}) => {

    // Quill dep and text that will be render
    const { quill, quillRef } = useQuill();
    const [text, setText] = useState('');

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const navigate = useNavigate();
    const PostURL = 'http://localhost:3000/api/admin/create-post';
    const NewPostPayload = {
        userID, 
        blogID: blogsDropdownID,
        title,
        subtitle,
        content: text
    };


    const PublistPost = async e => {
        e.preventDefault();
        try {
            const postStatus = await axios.post(PostURL, NewPostPayload, config);
            if (postStatus.status === 201) {
                alert('The post had been succesfully added.');
                navigate('/admin-dashboard');
            }  

        } 
        catch (error) {
            if (error.response.status === 500) alert('Something went wrong. Please make sure you completed all fields and selectors.');
            else alert('Something went wrong. Please try again')
        }
    }






    // Useeffect to reflect over the useQuill
    useEffect(() => {
        if (quill) {
          quill.on("text-change", (delta) => {
            setText(quill.root.innerHTML);        
          });
        }
      }, [quill]);



      
    //   Render basic text quill
      const renderText = () =>  {
        return {__html: text};
      } 











    //   MAIN rendered component
  return (
    <main>

    <form className='addPostForm' onSubmit={PublistPost}> 
        <div className="addBlogPostDivInput">
            <label htmlFor="postTitleA">Post title</label>
            <input type="text" name="postTitleA" id="postTitleA"
            value={title} 
            required
            onChange={e => setTitle(e.target.value)}
            placeholder='Title...'/>
        </div>
    
        <div className="addBlogPostDivInput">
            <label htmlFor="postsubTitleA">Post subtitle</label>
            <input type="text" name="postsubTitleA" id="postTitleA"
            value={subtitle} 
            required
            onChange={e => setSubtitle(e.target.value)}
            placeholder='Subtitle...'/>
        </div>
        
        <input id='PostFormSubmit' type="submit" value='Add post' />
    </form>
        
    {/* Playground quill */}
    <div style={{ width: 'auto',  height: 'auto'}}>
      <div ref={quillRef} style={{ height: 'auto'}}/>
    </div>

    {/* Next the render space will come */}
    <p className="previewWarningBlogText">Please review post before publish.</p>
    {/* Preview blogPost */}
    <div className='ql-editor' id="MainReference" dangerouslySetInnerHTML={renderText()} />


    </main>
  )
}
