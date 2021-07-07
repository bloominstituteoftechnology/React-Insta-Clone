import React from 'react';
import PropTypes from 'prop-types';
// import CommentSection from '../CommentSection/CommentSection';
// import dummyData from '../../dummy-data';
// import CommentSection from '../CommentSection/CommentSection';
// import './PostContainer.css';


const InputComment = props => {
    return(
        <div className = "input-comment">
        <form onSubmit={props.addNewComment}>
            <input 
            type = "text" 
            placeholder = "Add a comment..."
            name = "newComment"
            onChange={props.changeHandler}
            
            value={props.newComment}
            />

        </form>
    </div>
    )
}

InputComment.propTypes = {
    // postInfo: 
    username: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    }

    export default InputComment;