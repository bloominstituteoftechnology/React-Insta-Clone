import React, { Component } from 'react';
import moment from 'moment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.props = props;
  }
  componentDidMount() {
    this.setState({ posts: postData, });
  }
  render() {
    return (
      <div>
        <h2><img src={this.props.post.thumbnailUrl} style={{width:50+'px'}}/>{this.props.post.username}</h2>
        <img src={this.props.post.imageUrl} style={{maxWidth:500+'px'}}/>
        <span>likes: {this.props.post.likes}</span>
        <span>{moment(`${this.props.post.timestamp}`, "MMMDD YYYY HH:mm:ss a", 'en').fromNow()}</span>
        })}
      </div>
    );
  }
}
export default Post;