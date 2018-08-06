import React from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';

const CommentSection = props => {
    return(
        <div>
         <Comment comments={props.comments} />
        </div>
    );
}

export default CommentSection;