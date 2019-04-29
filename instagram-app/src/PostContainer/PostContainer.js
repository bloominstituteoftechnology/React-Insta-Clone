import React from 'react';
import Comment from '../CommentSection/Comment';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            {console.log(props.data)}
            <div className="user-banner">
                <img className="user-img" src={props.data.thumbnailUrl} alt="user-img"/>
                <h3>{props.data.username}</h3>
            </div>
            <img className="user-post" src={props.data.imageUrl} alt="user-post"/>
            <p className="likes">{props.data.likes} Likes</p>
            <div className="comment-section">
                {props.data.comments.map((comment,index) => 
                    <Comment username={comment.username} text={comment.text} key={index}/>
                    )}
                    <input type="text" placeholder="Add Comment" />
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default PostContainer;