import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="posting">
            <PostHeader post={props.post}/>
            <Post post={props.post} />
            <div className="bottom-text">
                <div className="comments-icons"><img src="img/comment-heart.png" alt="Comment heart"/><img src="img/comment-bubble.png" alt="Comment bubble" className="comment-bubble"/></div>
                <div className="likes">{props.post.likes} likes</div>
                
                <CommentSection comments={props.post.comments} />
                <div className="timestamp">{props.post.timestamp}</div>
                <div className="comment-field"><input placeholder="Add a comment..." className="add-comment"/><img src="img/ellipsis.png" alt="ellipsis" className="ellipsis"/></div>
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default PostContainer;
