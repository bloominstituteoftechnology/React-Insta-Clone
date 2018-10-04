import React from 'react';
import Post from './Post';
import Likes from './Likes';
import Comments from '../CommentSection/CommentList';

export default (props) => {
  return (
    <div>
      {props.data.map((post) => {
        return (
          <div>
            <Post userData={post}/>
            <Likes likes={post.likes}/>
            <Comments comments={post.comments}/>
            <p>{post.timestamp}</p>
            <input type='text' placeholder='Add a comment...' />
          </div>
        )})}
    </div>
  )
}