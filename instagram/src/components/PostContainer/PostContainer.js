import React from 'react';
import Proptypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.user,
      thumbnail: props.thumbnail,
      image: props.image,
      time: props.time,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {

    return(
      <div className="post">
        <div className="post__user">
          <img src={this.state.thumbnail} alt="thumbnail"/>
          <p>{this.state.username}</p>
        </div>

        <img src={this.state.image} alt="thumbnail"/>

        <CommentSection time={this.state.time}
                        likes={this.state.likes}
                        comments={this.state.comments}/>
      </div>
    );
  }
}

export default PostContainer;
