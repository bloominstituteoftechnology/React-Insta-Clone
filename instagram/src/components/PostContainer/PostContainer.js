import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import "../../App.css"

const PostContainer = props => {

return (

<div> <CommentSection /></div>

)
  
 /*  return props.list.map((item, id) => (
    <li
      onClick={() => props.toggleComplete(item.id)}
      key={id}
     
    >
      {item.task}
    </li>
  )); */
};

export default PostContainer;