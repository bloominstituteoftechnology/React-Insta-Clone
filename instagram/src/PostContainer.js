import React from 'react';
import { Comment } from './Comment';

export const PostContainer = (props) => {
  return (
    <div className="App__PostContainer">
      {
        props.posts.map((post) => {
          return (
            <div key={post.username + post.timestamp}>
              <div class="App__PostContainer-header">
                <img src={post.thumbnailUrl} alt=""/>
                {post.username}
              </div>
              <img src={post.imageUrl} alt=""/>
              <Comment comments={post.comments} />
            </div>
          );
        })
      }
    </div>
  );
}