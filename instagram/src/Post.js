import React, { Component } from 'react';
import moment from 'moment';
import Modal from './Modal.js'
import AddComment from './AddComment.js'
import Heart from './Icons.js'
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
      likes: 0,
      flagged: false,
    };
    this.props = props;
    this.addComment = this.addComment.bind(this);
    this.typeComment = this.typeComment.bind(this);
    this.addLike = this.addLike.bind(this);
    this.flag = this.flag.bind(this);
  }
  componentDidMount() {
    this.setState({ comments: this.props.post.comments, likes: this.props.post.likes, });
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
  addLike(val) {
    if (val === 'remove') {
      this.setState({ likes: ++this.state.likes });
    } else if (val === 'add') {
      this.setState({ likes: --this.state.likes });
    }
  }
  flag() {
    this.setState({ flagged: !(this.state.flagged) });
  }
  render() {
    return (
      <div style={{'outline': this.state.flagged ? 3+'px solid salmon' : ''}}>
        <h2><img src={this.props.post.thumbnailUrl} style={{width:50+'px'}}/>{this.props.post.username}</h2>
        <img src={this.props.post.imageUrl} style={{maxWidth:500+'px'}}/>
        <Heart addLike={ this.addLike }/>
        <span>likes: {this.state.likes}</span>
        <span>{moment(`${this.props.post.timestamp}`, "MMMDD YYYY HH:mm:ss a", 'en').fromNow()}</span>
        { this.state.comments.map(comment => <span>{`${comment.username} ${comment.text}`}</span>) }
        <AddComment
          newComment={ this.newComment }
          typeComment={ this.typeComment }
          addComment={ this.addComment }
        />
        <Modal flag={ this.flag }/>
      </div>
    );
  }
}
export default Post;