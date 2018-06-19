import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = props => {
    return (
        <div>
            {props.commentData.map(comments => 
                <div>
                    {comments.username} 
                    {comments.text}
                </div>
            )}
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
    })
};


export default CommentSection;