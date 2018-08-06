import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.posts.map( each => {
                return (
                    <div key={each.id}>
                        <img src={each.imageUrl} alt={`By ${each.username}`} />
                        <CommentSection comments={each.comments} />
                    </div>
                );
            })}
        </div>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
}

export default PostContainer;