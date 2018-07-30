import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return(
        <div className="post-container">
            {props.posts.map(post => {
                return (
                    <div className="post" key={post.timestamp}>
                        <img src={post.thumbnailUrl} alt="thumbnail of user"/>
                        <p>{post.username}</p>
                        <img src={post.imageUrl} alt="user's beautiful post" />
                        <p>{post.likes}</p>
                        <CommentSection comments={post.comments} />
                        <p>{post.timestamp}</p>
                    </div>
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default PostContainer;