import React from 'react';
import Comment from '../Comment/Comment';

import PropTypes from 'prop-types';

import './CommentsSection.css';

const CommentsSection = props => {
    return (
        <div className="comments">
            {props.comments.map(comment =>
                <Comment 
                    key={Math.random()}
                    comment={comment}
                />    
            )}
        </div>
    );
}

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsSection;