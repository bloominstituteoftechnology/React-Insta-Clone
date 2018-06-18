import React from 'react';
import PostContainer from './PostContainer/PostContainer';

const Posts = props => {
  return (
    <div>
      {props.userData.map(user => {
        return <div>
          <PostContainer key={user.timestamp} user={user} />
          {/*<CommentSection comments={user.comments} /> */}
        </div>
      })}
    </div>
  );
};

export default Posts;
