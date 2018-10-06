import React from 'react';
import { FaInstagram,FaSearch, FaHeart,FaComment,FaUserCircle,FaCompass  } from 'react-icons/fa';
import './commentsection.css';



const CommentSection = (props) => {
 
    return (
      <div className="commentsection">{props.Comments.map(comment =>{
          return (<li className="comment">
       <strong><span>{comment.username}</span></strong> <span>{comment.text}</span>
          </li>)
      })}
      <div className="timestring">{props.timestring}</div>
    
      <div className="addcomment">
          <a className="comment">Add a comment...</a>
          <a className="dot">...</a>
      </div>
      </div>
    );
  
}

export default CommentSection ;
