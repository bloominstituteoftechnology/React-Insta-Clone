import React from "react";
import PostContainer from "./PostContainer";

// class PostsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: props.posts,
//       user: props.user
//     };
//   }
//
//   render() {
//     return (
//       <div className={"content"}>
//         {this.state.posts.map(post => {
//           return (
//             <PostContainer
//               data={post}
//               key={post.timestamp}
//               className="post-container"
//               user={this.state.user}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

const PostsPage = props => {
  return (
    <div className={"content"}>
      {props.posts.map(post => {
        return (
          <PostContainer
            data={post}
            key={post.timestamp}
            className="post-container"
            user={props.user}
          />
        );
      })}
    </div>
  );
};

export default PostsPage;
