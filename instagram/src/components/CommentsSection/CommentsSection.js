import React from 'react';
import Comment from '../Comment/Comment';

import PropTypes from 'prop-types';

import './CommentsSection.css';

const CommentsSection = props => {
    return (
        <div className="comments">
            {props.comments.map((comment, index) =>
                <Comment 
                    key={Math.random()}
                    comment={comment}
                    index={index}
                    removeComment={props.removeComment}
                    parentIndex={props.parentIndex}
                />    
            )}
        </div>
    );
}

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsSection;