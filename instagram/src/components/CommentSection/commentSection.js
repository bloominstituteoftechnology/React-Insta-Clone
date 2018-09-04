import React from 'react';
import './CommentSection.css';
// import  Comment from './Comment'

const CommentSection = props => {
  console.log(props.data)
  return ( 
    <div className="comments">
      
        {props.data.map( item => 
          <div className="username-n-comment" key={item.username}>
            <p className="username">{item.username}</p>
            <p className="user-comment">{item.text}</p>
          </div>
        )}
        {/* <Comment /> */}
      
      

      
    </div>
  );
}
 
export default CommentSection;