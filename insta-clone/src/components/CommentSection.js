//CommentSection
import React from 'react';


const CommentSection = props => {
  return (
    <div>
    {props.comments.map(item =>(
        <div>
          <h3>{item.username}</h3>
          <p>{item.text}</p>
        </div>
          ))}
        <input type="text" />
    </div>
  )
}

export default CommentSection;
