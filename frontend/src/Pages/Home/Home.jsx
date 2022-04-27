import React from 'react'
import { ServiceTabs } from '../../FragmentComponnts/Blog/ServicesTabs/ServiceTabs'
import { WellcomeBlog } from '../../FragmentComponnts/Blog/WellcomeBlog'
import './Home.css'

import { GrServices, GrDeliver, GrBlog } from 'react-icons/gr';
import { CompanyStory } from '../../FragmentComponnts/ShortCompanyStory/CompanyStory';



export const Home = () => {
  return (
    <main className='indexMainPage'>
        <WellcomeBlog />
        
        {/* Service tabs */}
        <aside className='serviceTabs'>
          <ServiceTabs title='Reliable services' icon={<GrServices size={35} />} text='With our new ticket system you can require any kind of help and information about our products' />
          <ServiceTabs title='Fast orders' icon={<GrDeliver size={35} />} text='We aim to ship you the order in a maximum 24 hours from the time you place the order' />
          <ServiceTabs title='New posts' icon={<GrBlog size={35} />} text='Checkout our new blog where you can read a range of news, find our policy topics, and other exciting stuffs.' />
        </aside>
    
        {/* Company story */}
        <aside className='storyModeDivMain'>
          <CompanyStory />
        </aside>

    </main>
  )
}
