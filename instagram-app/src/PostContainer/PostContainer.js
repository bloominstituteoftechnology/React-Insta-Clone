import React from 'react';
import Comment from '../CommentSection/Comment';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div>
            {props.data.comments.map((comment,index) => 
                <Comment username={comment.username} text={comment.text} key={index}/>
                )}
                <input type="text" placeholder="Add Comment" />
        </div>
    );
}

PostContainer.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default PostContainer;