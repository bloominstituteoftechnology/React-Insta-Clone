import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentsSection from '../CommentsSection/CommentsSection';

const PostsContainer = props => {

  return (
    <div className="post">
      <div>
        {props.posts.map( post => {
          return (
            <div className="postsContainer" key={post.timestamp}>
              <Post 
                thumbnailUrl = {post.thumbnailUrl}
                username = {post.username}
                imageUrl = {post.imageUrl}
                likes = {post.likes}
                timestamp = {post.timestamp}
              />
              <div className="commentsSection">
                <CommentsSection comments={post.comments} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostsContainer
