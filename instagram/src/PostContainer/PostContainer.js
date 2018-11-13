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
                        key ={`${index},${currentPost.timestamp}`}
                        comments={currentPost.comments}/>
                    <p className='timestamp'>{currentPost.timestamp.toUpperCase()}</p>
                    <CommentForm />
                </div>
        ))}
        </div>
        
    );
}

PostContainer.propTypes = {
    userObject: PropTypes.shape({
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array,
    })
  }

export default PostContainer;