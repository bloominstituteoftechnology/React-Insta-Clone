import React from 'react';

const PostContainer = props => {
  return(
    <div>
      {props.feed.map(element => {
        return (
          <div key={element.username}>
           {element.username}
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;