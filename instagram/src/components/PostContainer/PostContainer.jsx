import React from 'react';

const PostContainer = props => {
  return(
    <div className="post-container-wrapper">
      <h1>This is the post container working title</h1>
      
      {
        // returning some testing data and rendering for debugging
        props.data.map(item => {
          console.log(item.username);
          return (
        <div key={item.username}>
        <p>
          Username: {item.username}
        </p>
        <p>
          Likes: {item.likes}
        </p>
        </div>

          );
      })}
    </div>
  );
};

export default PostContainer;