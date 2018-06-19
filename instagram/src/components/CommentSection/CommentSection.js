import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
            {props.dummyData.map(comment => (
                <div key={Math.random()}>
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