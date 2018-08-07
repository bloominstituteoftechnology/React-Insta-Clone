// import React from 'react';
// import Header from './Header';
// import CommentSection from '../CommentSection/CommentSection'

// import './PostContainer.css'
// const NewPost = props => {
//     return (
//         <div className='post-wrapper'>
//           <Header
//             username={props.posts.username}
//             thumbnailUrl={props.posts.thumbnailUrl}
//           />
//           <div className='post-image-wrapper'>
//             <img
//               alt='post thumbnail'
//               className='post-image'
//               src={props.posts.imageUrl}
//             />
//           </div>
//           <CommentSection eachComment={posts.comments} />
//         </div>
//       );
//     };


// export default NewPost;


// import CommentSection from “../CommentSection/CommentSectionContainer”;
import PostHeader from './Header';

// import “./Posts.css”;

const Post = props => {
 return (
   <div className='post-border'>
     <Header
       username={props.post.username}
       thumbnailUrl={props.post.thumbnailUrl}
     />
     <div className='post-image-wrapper'>
       <img
         alt='post thumbnail'
         className='post-image'
         src={props.post.imageUrl}
       />
     </div>
     {/* <CommentSection comments={props.post.comments} /> */}
   </div>
 );
};

export default Post;