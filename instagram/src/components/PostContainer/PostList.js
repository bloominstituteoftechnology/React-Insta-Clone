import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Likes from './Likes';
import CommentList from '../CommentSection/CommentList';

const PostList = props => {
  return (
    <div>
      {props.data.map((post) => {
        return (
          <div>
            <Post userData={post}/>
            <Likes likes={post.likes}/>
            <CommentList comments={post.comments}/>
            <p>{post.timestamp}</p>
            <input type='text' placeholder='Add a comment...' />
          </div>
        )})}
    </div>
  )
}

PostList.propTypes = {
 timestamp: PropTypes.string, 
}
export default PostList;