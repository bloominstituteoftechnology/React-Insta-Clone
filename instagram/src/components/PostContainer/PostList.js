import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Likes from './Likes';
import CommentList from '../CommentSection/CommentList';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      likes: props.post.likes
    }
  }

  increaseLikes = e => {
    this.setState({likes: this.state.likes + 1})
  }

  render() {
    return (
      <div>
        <Post userData={this.props.post} />
        <Likes likes={this.state.likes} increaseLikes={this.increaseLikes} />
        <CommentList comments={this.props.post.comments} timeStamp={this.props.post.timestamp} />
      </div>
    )
  }
}


PostList.propTypes = {
 timestamp: PropTypes.string, 
}
export default PostList;