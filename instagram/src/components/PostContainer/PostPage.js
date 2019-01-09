import React from 'react';
import './post.css';
import PostContainer from './PostContainer';

const PostPage = props => {
  return (
    <div>
      {props.state.instaData.map(user => <PostContainer data={user} key={user.timestamp} like={props.addLike} />)}
    </div>
  )
}

export default PostPage;