import React from 'react';


export const PostContainer = (props) => {
  return (
    <div>
      <div>
        {props.post.map((item) => {
          return <div>{item.thumbnailUrl} </div>
        })}
      </div>
    </div>
  );
}
