import React, { Component } from 'react';
import moment from 'moment';
import AddComment from './AddComment'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
    };
    this.props = props;
    this.addComment = this.addComment.bind(this);
    this.typeComment = this.typeComment.bind(this);
  }
  componentDidMount() {
    this.setState({ comments: this.props.post.comments, });
  }
  addComment(e) {
    e.preventDefault();
    const test = this.state.comments;
    test.push({ username: 'Thomas', text: this.state.newComment, });
    this.setState({ comments: test, newComment: '', });;
  }
  typeComment(event) {
    this.setState({ newComment: event.target.value, });
  }
  render() {
    return (
      <div>
        <h2><img src={this.props.post.thumbnailUrl} style={{width:50+'px'}}/>{this.props.post.username}</h2>
        <img src={this.props.post.imageUrl} style={{maxWidth:500+'px'}}/>
        <span>likes: {this.props.post.likes}</span>
        <span>{moment(`${this.props.post.timestamp}`, "MMMDD YYYY HH:mm:ss a", 'en').fromNow()}</span>
        { this.state.comments.map(comment => <span>{`${comment.username} ${comment.text}`}</span>) }
        <AddComment
          newComment={ this.newComment }
          typeComment={ this.typeComment }
          addComment={ this.addComment }
        />
      </div>
    );
  }
}
export default Post;