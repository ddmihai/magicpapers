import React from 'react'

export const AvatarComponent = ({user}) => {
    const imageAvatar = user.userAvatar;

    return (
    <aside className='avatarWrapper'>
        <img 
            src={imageAvatar} 
            alt="avatar" 
            width={70}
            height={70}
            style={{
                borderRadius: '50%',
                marginRight: '20px'
            }}/>
    </aside>
  )
}
