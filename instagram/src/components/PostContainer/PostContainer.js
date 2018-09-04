import React from 'react';
import PropTypes from 'prop-types';
import PostAvatar from './PostAvatar';
import PostImg from './PostImg';
import CommentContainer from '../CommentSection/CommentContainer';

function PostContainer(props) {
    return(
        <div>
            {props.posts.map((post, index) => {
                return(
                    <div key={index}>
                        <PostAvatar
                            posterName = {post.username}
                            posterAvatar = {post.thumbnailUrl}
                        />

                        <PostImg
                            postImg = {post.imageUrl}
                        />
                    </div>
                )
            })}

            <CommentContainer  
                posts = {props.posts} 
            />
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  };

export default PostContainer;