import React, {Component} from "react";
//import CommentSection from './components/CommentSection/CommentSection.js';
// import PostContainer from './components/PostContainer/PostContainer.js';

const CommentSection = props => {
    console.log(this.props);
    return (
        <div> 
            props.comments
            {/* {props.comments.map(comment => {
                 <div key={comment.username}> {comment.text} </div>
            })} */}
        </div>
    )
}

  
  

export default CommentSection;