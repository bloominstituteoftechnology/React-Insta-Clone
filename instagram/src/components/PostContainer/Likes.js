import React from 'react'

export default (props) => {
  return (
    <div>
      <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
      <img src='https://image.flaticon.com/icons/svg/25/25663.svg' alt='comment icon'/>
      <p>{props.likes}</p>
    </div>
  )
}
