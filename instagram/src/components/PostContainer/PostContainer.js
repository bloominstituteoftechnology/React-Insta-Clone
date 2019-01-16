import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";
import './PostContainer.css'

function PostContainer (props) {
    return (
      <div className= "post-container">
      {props.posts.map((post, index) => (
        <div key={index} className="post-wrap">
        <div className="thumb-name">
          <img
            src={post.thumbnailUrl}
            alt={`${post.username}s avatar thumbnail`}
            className="thumb-img"
          />
          <div className='username'>{post.username}</div>
        </div>


        <div className= "main-img" >
        <img
            src={post.imageUrl}
            alt='main post image'
            />
         </div>   
         <div className="like-icons">
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
         </div>
           <p className = "num-likes"> {post.likes} likes</p>
          
          <CommentSection commentsarray={post.comments} />
          <p className= "date">{post.timestamp}</p>

          <form className= "comm-form">
            <input className= "comm-input"type="text" name="titlevalue" placeholder="Add a comment..." />
          </form>
          
          <br/><br/><br/>
        
        </div>
      ))}
    </div>
  );
}


PostContainer.propTypes = {
    posts: PropTypes.arrayOf (
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            comments: PropTypes.arrayOf (
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string,
                }),
            )
        })
    )
}


export default PostContainer