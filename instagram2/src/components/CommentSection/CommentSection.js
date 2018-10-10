import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';



const CommentSection = (props) => {
    console.log('commentsection props', props);
    return (
        <div>
            {props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    )
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
};

export default CommentSection;


//need index for key? 