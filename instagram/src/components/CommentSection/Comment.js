 import React from 'react';
 import PropTypes from "prop-types";

 const Comment = props => {
  return (	 
      <div className="comment">
       <div class="commentPart">
          <span class="commentUser">{props.username} </span> 
           {props.text}
      </div>

      </div>
  )}
  Comment.protoTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}
 export default Comment;