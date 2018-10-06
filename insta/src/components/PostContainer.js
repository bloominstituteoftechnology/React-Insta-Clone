import React from 'react';
import CommentSection from './CommentSection';
import Post from './Post';
import './Posts.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.posts.map(post => (
                <div className='post-tunnel' key={post.timestamp}>
                    <Post post={post} />
                    <CommentSection comments={post.comments} likes={post.likes} index={post.index} commentInput={props.commentInput} handleSubmit={props.handleSubmit} addNewComment={props.addNewComment}/>
                </div>
            ))}
        </div>
    );
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;