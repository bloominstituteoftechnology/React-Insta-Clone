import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';


const PostContainer = (props) => {
  return (
    <div className='post'>
      <div className='post__user'>
        <img src = 'https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg' alt = 'text' />
        <div>{props.post.username}</div>
      </div>
      <img src = './assets/ig_post.png' alt = 'text' />
      <div>{props.post.likes} likes</div>
      <CommentSection comments = {props.post.comments} />
      <div>{props.post.timestamp}</div>
    </div>
  );
}

export default PostContainer;
