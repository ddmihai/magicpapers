import React from 'react'
import './BlogDropDown.css'

export const BlogDropDown = ({blogListsElements}) => {
    
    return (
        <>
            {
                blogListsElements.map(blog => (
                    <aside className='blogCategoryList' key={blog.blogID} onClick={() => console.log(blog.blogID)}>
                        <h3 className='blogTitle'>
                            {blog.title}
                        </h3>
                
                        <p className="blogSubtitle">
                            {blog.subtitle}
                        </p>
                    </aside>
                ))
            }
        </>
  )
}


// #

