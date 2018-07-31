import React from 'react';
import './CommentSection.css';
// import PropTypes from 'prop-types';

const Comment = props => {
        return (
            <div>
                <span>{props.username}</span>
                {props.text}
            </div>
        );

}

// CommentSection.propTypes = {
//     comment: PropTypes.shape({
//         username: PropTypes.string,
//         text: PropTypes.string
//     })
// }


export default Comment;