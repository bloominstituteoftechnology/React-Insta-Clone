import React from 'react';
import Comment from '../CommentSection/Comment';
import PropTypes from 'prop-types';
import './PostContainer.css';
import heart from '../heart.svg';
import comment from '../comment.svg';
const PostContainer = props => {
    return (
        <div className="post">
            {console.log(props.data)}
            <div className="user-banner">
                <img className="user-img" src={props.data.thumbnailUrl} alt="user-img"/>
                <h3>{props.data.username}</h3>
            </div>
            <img className="user-post" src={props.data.imageUrl} alt="user-post"/>
            <div className="comment-logos">
                <img className="comment-logo" src={heart} alt="heart" />
                <img className="comment-logo" src={comment} alt="comment" />
                <p className="likes">{props.data.likes} Likes</p>
            </div>
        
            
            <div className="comment-section">
                {props.data.comments.map((comment,index) => 
                    <Comment username={comment.username} text={comment.text} key={index}/>
                    )}
                    <input className="add-comment" type="text" placeholder="Add Comment" />
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