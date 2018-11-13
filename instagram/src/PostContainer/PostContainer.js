import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import LikesContainer from '../LikesContainer/LikesContainer';
import CommentSection from '../CommentSection/CommentSection';
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
                    <LikesContainer likes={currentPost.likes}/>
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