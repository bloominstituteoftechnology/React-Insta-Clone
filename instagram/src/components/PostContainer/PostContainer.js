import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        props.posts.map((post, index) => {
            return(
                <div className="container">
                    <Post 
                    addLike={post.addLike}
                    post={post}
                    key={index} 
                    username={post.username}
                    thumbnailUrl={post.thumbnailUrl}
                    imageUrl={post.imageUrl}
                    likes={post.likes}
                    timestamp={post.timestamp}
                    comments={post.comments}
                    />
                </div>
            )
        })
    )
}

PostContainer.propType = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;