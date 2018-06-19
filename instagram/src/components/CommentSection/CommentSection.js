import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.dummyData.map(comment => (
                <div className="custom-comment" key={Math.random()}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                </div>
            ))}
            <div>
                <input type="text" placeholder="Add a comment..."/>
            </div>
        </div>
    )
}

// CommentSection.propTypes = {
//     dummyData: PropTypes.array
//     // username: PropTypes.string,
//     // text: PropTypes.string
// };
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
};

 
export default CommentSection;