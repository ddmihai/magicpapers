import React from 'react'

export const BlogDefaultPosts = ({posts}) => {
  return (
    <main className='previewBlogs'>
        {
            posts.map(post => (
                <div className='postPreviewWrapper' key={post.postID}>
                    <h4 className='postMainTitle'> {post.title} </h4>
                    <p className='postMainSubtitle'> {post.subtitle} </p>
                </div>
            ))
        }
    </main>
  )
}
