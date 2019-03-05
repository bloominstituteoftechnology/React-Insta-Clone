import React from 'react';
//import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
             {/* <img alt='heart' src= {Heart} className="logo" /> */}
            {/* great way to do the hearts at the end of each comment. */}
            <div>
            {props.comments.username}: {props.comments.text}
            </div>
        </div>
    );
};

// Comment.propTypes = {
//     comment: PropTypes.shape({
//       text: PropTypes.string,
//       username: PropTypes.string
//     })
//   };

export default Comment;