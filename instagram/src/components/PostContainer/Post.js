import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({likes});
  };

  render() {
    return (
      <div className="post-border">
       <PostHeader
      username={this.props.post.username}
      thumbnailUrl={this.props.post.thumbnailUrl}
      /> 
      <div className="post-image">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
          </div>
          <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
          />
          <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
          />
          </div>
    );
  }
}


Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};


 
export default Post;


/* DAY 1 RESULTS */

// const Post = props => {
//     return (  
//         <div className="post-border">
//       <PostHeader
//         username={props.post.username}
//         thumbnailUrl={props.post.thumbnailUrl}
//       />
//       <div className="post-image">
//         <img
//           alt="post thumbnail"
//           className="post-image"
//           src={props.post.imageUrl}
//         />
//         </div>
//       <div className="social-section">
//           <div className="social">
//       <i className="fa fa-heart" />
//       </div>
//         <div className="social">
//       <i className="fa fa-user-circle" />
//     </div>
//       </div>
//       <CommentSection comments={props.post.comments} />
//     </div>
//     );
// }