import React from 'react';
import PropTypes from 'prop-types';
import './post.css';
import CommentSection from './CommentSection';

const PostContainer = (props) =>{
    return(
        <div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;