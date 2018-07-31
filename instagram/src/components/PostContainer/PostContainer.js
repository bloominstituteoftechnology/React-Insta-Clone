import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return(
        <div>
            {props.name.map(dData => {
                return(
                    <div key={dData.username}>
                        <div>
                            <img src={dData.thumbnailUrl} alt="profile image" />
                            <span><strong>{dData.username}</strong></span>
                        </div>
                        <img src={dData.imageUrl} alt="picture" />
                        <div>
                            <img alt="heart logo" />
                            <img alt="comment logo" />
                            <p>{dData.likes} <strong>likes</strong></p>
                        </div>
                        <CommentSection comments={dData.comments} />
                        <p>{dData.timestamp}</p>
                        <div>
                            <input value="Add a comment..." />
                            <img alt="options logo" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

PostContainer.propTypes = {
    name: PropTypes.arrayOf(PropTypes.object),
    dData: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object),
        timestamp: PropTypes.string
    })
};

export default PostContainer;