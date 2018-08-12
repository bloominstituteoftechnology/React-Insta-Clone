import React from '../../node_modules/react';
import './css/CommentSection.css';
// import PropTypes from '../../node_modules/prop-types';


const CommentSection = props => {
 


  
    return (
      <div>
      {props.comments.map(each => {
        return(
          <div>
            <div className="commenter">{each.username}</div> 
            <div className="comment">{each.text}</div>
          </div>
        )
      })}
      <input class="inputComment" type="text" placeholder="Add a comment..."></input>
       
        
      </div>
    )
  

  
}

export default CommentSection;