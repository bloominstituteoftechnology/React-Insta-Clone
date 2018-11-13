import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import CommentForm from '../CommentSection/CommentForm';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return(
        <div className='post-container'>
            {props.data.map((currentPost, index) => (
                <div className='individual-post'>
                    <PostHeader 
                        key={currentPost.timestamp} 
                        thumbnail={currentPost.thumbnailUrl} 
                        userName={currentPost.username}/>
                    <img src={currentPost.imageUrl} alt="An Instagram Post"/>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <p className='likes-amount'>{currentPost.likes} likes</p>
                    <CommentSection
                        key={index + 1}
                        comments={currentPost.comments}
                        postTimestamp={currentPost.timestamp}
                    />
                    
                </div>
        ))}
        </div>
        
    );
}

PostContainer.propTypes = {
    commentText: PropTypes.string,
    handlesChanges: PropTypes.func,
    userObject: PropTypes.shape({
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.string),
    })
  }

export default PostContainer;