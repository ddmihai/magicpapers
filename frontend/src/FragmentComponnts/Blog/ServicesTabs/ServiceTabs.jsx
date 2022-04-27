import React from 'react'
import './ServicesTabs.css'


export const ServiceTabs = ({title, icon, text}) => {
  return (
    <div className='serviceIndividualTab'>
        <p className='serviceTitle'>{title}</p>
        <p className='serviceIcon'>{icon}</p>
        <p className='serviceText'>{text}</p>
    </div>
  )
}
