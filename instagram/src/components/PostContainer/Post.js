import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
console.log(props.post);
    return(
    
        <div className='post'>
    
            <div className='header'>
                 <img src={props.post.thumbnailUrl}></img>
                <h3>{props.post.username}</h3>
            </div>
            <img src={props.post.imageUrl}></img>
            <div className='emoji'>
             <i className="far fa-heart" ></i>
             <i className="far fa-comment"></i>
            </div>
            <p>{props.post.likes} likes</p>
            
            <CommentSection index={props.index} comments={props.post.comments}
            newComment={props.newComment}  onCommentChange={props.onCommentChange} 
            addNewComment={props.addNewComment}/>
                  
            
        </div>

    );
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  };

export default Post;