import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostInfo from "./PostInfo";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LowerContent = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PostWrapper = styled.div`
  border: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5% auto;
`;

const PostContainer = props => {
  return (
    <PostWrapper>
      <PostHeader info={props.post} />
      <PostImage src={props.post.imageUrl} />
      <LowerContent>
        <PostInfo likes={props.post.likes} id={props.post.thumbnailUrl} />
        <CommentSection
          post={props.post}
          newComment={props.addComment}
          id={props.post.imageUrl}
        />
      </LowerContent>
    </PostWrapper>
  );
};

// class PostContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: this.props.post.imageUrl,
//       likes: this.props.post.likes
//     };
//   }

//   handleLike = () => {
//     console.log("clicked");
//     let plus = this.state.likes + 1;
//     this.setState({ likes: plus });
//   };

//   render() {
//     console.log(this.state.likes);
//     return (

//     );
//   }
// }

// onClick={props.onClick} id={props.post.username}

export default PostContainer;
