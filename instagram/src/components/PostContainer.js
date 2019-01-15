import React from "react";
import CommentSection from './CommentSection';
import './PostContainer.css'

function PostContainer(props) {
    //console.log(props)
    return (
      <div className='main-container'>
        {props.postsarray.map((post, index) => (
            <div>
          <div className='post-icon'>
            <div className="thumbnail"> 
            <img
              src={post.thumbnailUrl}
              alt={`${post.username}s avatar thumbnail`}
            />
             </div>
            <h4>
              {post.username}
            </h4>
            </div>
            <img
              src={post.imageUrl}
              alt={`${post.username}s avatar thumbnail`}
            />
            <div className='comment-icons'>
            <i class="far fa-heart" />
            <i class="far fa-comment"></i>
            </div>
             <h3>
             {post.likes} likes
            </h3>
            <p>{post.timestamp}</p>
  
            <CommentSection commentsarray={post.comments} />
            <form>
              <input type="text" name="titlevalue" placeholder="Add a comment..."  className="comment-input" />
            </form>
            <br/><br/><br/>
          </div>
        ))}
      </div>
    );
  }

export default PostContainer;



