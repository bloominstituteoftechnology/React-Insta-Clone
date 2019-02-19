import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from './CommentSection';


function PostContainer (props) {
    return (
        <div className="post-container">
            {props.dummyData.map(dummyData => ( 
                <div key={dummyData.username} className="user-header">
                    <img src={dummyData.thumbnailUrl} alt={dummyData.username} />
                    {dummyData.username}
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                    {/* image icons */}
                    <p><strong>{dummyData.likes} likes</strong></p>
                    <CommentSection commentData={dummyData.comments} />
                    {dummyData.timestamp}
                </div>
            ))}
        </div>
    );

};


PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        })
    )
}

PostContainer.defaultProps = {
    dummyData: []
};

export default PostContainer;