import React from 'react'
import './WellcomeBlog.css'
import blogWellcome from '../../Images/BlogWellcome.png'




export const WellcomeBlog = () => {
  return (
    <section className='magicPapersBlogBanner'>
        <aside className="blogBannerIntro">
            <p className='wellcomeBlogParagraph'>We are please to reveal our new webiste blog</p>
            <h1>Wellcome to Magic Papers</h1>
        
            <p className='blogIntroBannerText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti soluta placeat consequatur dicta commodi hic ex quaerat. Similique, endregion
                dignissimos! Blanditiis, beatae! Blanditiis fugit nihil mollitia vel ipsa voluptatem adipisci sit architecto, quos culpa libero, perspiciatis
                voluptatem odio commodi. 
            </p>

            <ul>
                <li>FACEBOOK</li>
                <li>WHATSAPP</li>
                <li>EMAIL</li>
            </ul>
        </aside>

        <aside className="blogBannerImage">
            <img className='bookShelfes' src={blogWellcome} alt="wellcome blog pic" />
        </aside>
    </section>
  )
}
