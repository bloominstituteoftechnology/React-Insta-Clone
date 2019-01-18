import React from "react";
import Likes from "./Likes";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";
import moment from 'moment';
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  addLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div>
        <div className="post-wrap">
          <PostHeader username= {this.props.post.username}
          thumbnailURL= {this.props.post.thumbnailURL} />

          <div className="main-img">
            <img src={this.props.post.imageUrl} 
            alt="main post image" />
          </div>
          <Likes addLikes={this.addLikes} likes={this.state.likes} />

          
          <CommentSection comments={this.props.post.comments}
                           postId={this.props.post.imageUrl}
                            timestamp={this.props.post.timestamp}   
                        />
          
          
        </div>
      </div>
    );
  }
}


Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageUrl: PropTypes.string
    })
  };

  export default Post;