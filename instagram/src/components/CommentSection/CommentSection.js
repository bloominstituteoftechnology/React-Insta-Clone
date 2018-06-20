import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const CommentSection = props => {
    return (
            
        <div className="comment-container">
            {props.commentData.map(comments => 
                <div className="comment-text">
                    <strong>{comments.username}</strong>:
                    {comments.text}
                </div>
            )}
            
            <div className="comment-box">
       <input placeholder="Add a Comment Here..." name="textbox" className="textbox"/>
    	 </div> 
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
    })
};


export default CommentSection;