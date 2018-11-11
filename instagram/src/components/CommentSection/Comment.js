import React from 'react'

const Comment = props => {
  console.log(props.data);
  
  return (
    <div>
      <p><span>{props.data.username}</span>{props.data.text}</p>
    </div>
  )
}

export default Comment
