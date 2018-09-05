import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import Post from './post';
import CommentSection from '../CommentSection/commentsection';

function PostContainer(props) {
    return (
        <div className='posts-container'>
            {props.posts.map( (postData, index) => {
                return (
                    <div className='post-container' key={postData.timestamp + '-' + postData.username} >
                        <Post 
                            postData={postData} 
                            handleLikes={props.handleLikes} 
                            index={index} 
                        /> 
                        <CommentSection 
                            timestamp={postData.timestamp} 
                            comments={postData.comments} 
                        />
                    </div>
                );
            })}
        </div>
    );
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    ),
    handleLikes: PropTypes.func
}

export default PostContainer;
