import React from 'react';
import PostIcons from './PostIcons/PostIcons';
import CommentSection from './CommentSection/CommentSection';
import propTypes from 'prop-types';

const PostContent = (props) => {
  return (
    <section className='post-content'>
      <PostIcons likes={props.likes}/>
    <CommentSection comments={props.comments} onSubmit={props.onSubmit} commentText={props.commentText} onChange={props.onChange} close={props.close}/>
    </section>
  );
}

PostContent.propTypes = {
  likes: propTypes.number,
  comments: propTypes.array
}

export default PostContent;
