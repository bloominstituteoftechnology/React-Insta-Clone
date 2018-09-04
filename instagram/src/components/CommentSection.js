import React from 'react';
import './CommentSection.css';



const CommentSection = props => {
    return (
        <div className = 'commentBarMain'>
            <div className ='commentIcons'>
                <img className = 'commentHeart' src='#' alt='Heart Img'/>
                <img className = 'commentBubble' src='#' alt='Comment Img'/>
            </div>
            <div className ='likesBox'>
            <h1 className = 'instaLikes'>props.Likes</h1>
            </div>
            <div className = 'commentField'>
                <p className ='com1'>props.Comments</p>
                <p className ='com2'>props.Comments</p>
                <p className ='com3'>props.Comments</p>
                <p className = 'commentTimestamp'>props.Timestamp</p>
            </div>

            <div className = 'addComment'>
            <input className = 'bottomInput' type='text' placeholder="Add Comment"></input>
            <p>...</p>
            </div>
        </div>

    );
};

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         username: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired
//     })
// }

export default CommentSection;