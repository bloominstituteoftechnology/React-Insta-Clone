import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

// const PostContainer = (props) => {
//   return(
//     <div>
//       <div>
//         <div><img src={props.postData.thumbnailUrl} alt="img"/></div>
//         <div><img src={props.postData.imageUrl} alt="img"/></div>
//         <CommentSection post={props.postData}/>
//       </div>
//     </div>
//   )
// };

// export default PostContainer;


const PostContainer = ({postData}) => {
  return (
    <div className="post-container">
      <div className="thumbnail">
        <img src={postData.thumbnailUrl}/>
        <span><b>{postData.username}</b></span>
      </div>
      <div className="image">
        <img src={postData.imageUrl}/>
      </div>
      <div>
        <CommentSection comments={postData.comments}/>
      </div>
    </div>
  );
}

export default PostContainer;
