// import React from "react";
// import "./PostContainer.css";
// import CommentSection from "../CommentSection/CommentSection";
// import PostInfo from "./PostInfo";
// import PostHeader from "./PostHeader";
// import PostImage from "./PostImage";
// import styled from "styled-components";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const LowerContent = styled.div`
//   width: 95%;
//   margin: 0 auto;
// `;

// const PostWrapper = styled.div`
//   border: 1px solid #ececec;
//   display: flex;
//   flex-direction: column;
//   width: 50%;
//   margin: 5% auto;
// `;

// const SinglePost = props => {
//   console.log(props.post);
//   return (
//     <PostWrapper id={props.post[0].username}>
//       <PostHeader info={props.post[0]} />
//       <PostImage src={props.post[0].imageUrl} />
//       <LowerContent>
//         <PostInfo likes={props.post[0].likes} id={props.post[0].thumbnailUrl} />
//         <CommentSection
//           post={props.post[0]}
//           newComment={props.addComment}
//           id={props.post[0].imageUrl}
//         />
//       </LowerContent>
//       <Route path="/single-post" component={SinglePost} />
//     </PostWrapper>
//   );
// };

// export default SinglePost;
