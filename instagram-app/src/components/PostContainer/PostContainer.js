import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const postContainer = (props) => {
    const { data } = props;
    return (
        <div>
            {data.comments.map(comment => {
                return <CommentSection key={comment.id} comment={comment}/>
            })}
        </div>
    )
}

postContainer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default postContainer;
