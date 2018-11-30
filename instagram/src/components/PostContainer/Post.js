import React from 'react';
import './Posts.css';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types';
import Like from './Like';

class Post extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      likes: props.post.likes
    };
  }

  likeCounter = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render(){
    return(
      <div className='p-border'>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className='p-image-container'>
          <img className='p-image'
            src={this.props.post.imageUrl}
          />
        </div>
        <Like
          likeCounter={this.likeCounter}
          likes={this.state.likes}
        />
        <CommentContainer
          comments={this.props.post.comments}
          ID={this.props.post.imageUrl}
        />

      </div>
    )
  }
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};



export default Post;
