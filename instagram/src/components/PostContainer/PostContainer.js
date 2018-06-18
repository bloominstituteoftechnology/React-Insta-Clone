import React from 'react';
import Comments from './../CommentSection/Comments';

const PostContainer = props => {
    return (
        <div>
            <div>
            {props.data.map(item => {
          return <p className='post' key='item.timestamp'>{item.username}{item.imageUrl}</p>
        })}
        </div>
        <Comments  />
        </div>
    )
}

export default PostContainer;