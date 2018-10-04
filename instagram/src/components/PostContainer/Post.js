import React from 'react'

export default (props) => {
  return (
    <div>
      <div className='userDetails'>
        <img src={props.userData.thumbnailUrl} alt='post images'/>
        <p>{props.userData.username}</p>
      </div>
      <div className='postImage'>
        <img src={props.userData.imageUrl} alt='post' />
      </div>
    </div>
  )
}
