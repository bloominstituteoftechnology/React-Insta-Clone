import React from "react";
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";
import './PostContainer.css'

function PostContainer (props) {
    return (
        <div className="post-container">
        {props.posts.map((post, index) => (
        
        <div key={index}>
          <img className= "avatar-img"
            src={post.thumbnailUrl}
            alt={`${post.username}s avatar thumbnail`}
          />
          
          <h3>
            {index} :{post.username} - {post.likes} likes,
          </h3>
          <img className= 'post-img'
            src={post.imageUrl}
            alt='main post image'
            />
          <p>{post.timestamp}</p>

          <CommentSection commentsarray={post.comments} />
          <form>
            <input type="text" name="titlevalue" placeholder="Add a comment..." />
          </form>
          
          <br/><br/><br/>
        
        </div>
      ))}
    </div>
  );
}    

PostContainer.propTypes = {
    postsarray: PropTypes.arrayOf (
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