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

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};
 
export default CommentSection;