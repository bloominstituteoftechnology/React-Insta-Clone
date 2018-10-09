import React from 'react';
import PostIcons from './PostIcons';
import Comments from '../CommentSection/Comments';
 const PostContent = (props) => {
  return (
    <section className='post-content'>
      <PostIcons likes={props.likes}/>
      <Comments  comments={props.comments}/>
    </section>
  );
}
 export default PostContent;