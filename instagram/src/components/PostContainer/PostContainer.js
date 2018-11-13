import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostInfo from "./PostInfo";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const PostContainer = props => {
  return (
    <div className="post-container">
      <PostHeader info={props.post} />
      <PostImage src={props.post.imageUrl} />
      <div className="lower-content">
        <PostInfo likes={props.post.likes} />
        <CommentSection
          post={props.post}
          newComment={props.addComment}
          id={props.post.imageUrl}
        />
      </div>
    </div>
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

export default PostContainer;
