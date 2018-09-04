import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import Post from './post';
import CommentSection from '../CommentSection/commentsection';

function PostContainer(props) {
    return (
        <div className='posts-container'>
            {props.posts.map( (postData) => {
                return (
                    <div className='post-container' key={postData.timestamp + '-' + postData.username} >
                        <Post 
                            postData={postData} 
                        /> 
                        <CommentSection 
                            timestamp={postData.timestamp} 
                            comments={postData.comments} 
                            commentInput={props.commentInput} 
                            handleCommentInput={props.handleCommentInput} 
                            handleComment={props.handleComment} 
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
    commentInput: PropTypes.string,
    handleCommentInput: PropTypes.func,
    handleComment: PropTypes.func
}

export default PostContainer;
