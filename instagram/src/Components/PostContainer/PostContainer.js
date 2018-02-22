import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css';

const PostContainer = ({ post }) => {
  return (
    <div className="post-container">
      <div className="thumbnail">
        <div className="thumbnail-img">
          <img src={post.thumbnailUrl} />
        </div>
        <div className="thumbnail-username"> 
          <b>{post.username}</b>
        </div>
      </div>
      <div className="image">
        <img src={post.imageUrl} />
      </div>
      <CommentSection comments={post.comments} />
    </div>
  );
}

export default PostContainer;

// const PostContainer = (props) => {
//   console.log(props)

//   return (
//     <div>
//       <div>{props.post.username}</div>
//       <img className="ThumbNail" src={props.post.thumbnailUrl} />
//       <img src={props.post.imageUrl} />
//       <div>{props.post.likes} likes </div>
//       {/* <CommentSection comments={post.comments} /> */}
//     </div>
//   );
// }



