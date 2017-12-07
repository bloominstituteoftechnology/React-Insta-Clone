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
    this.addComment = this.addComment.bind(this);
    this.typeComment = this.typeComment.bind(this);
    this.addLike = this.addLike.bind(this);
    this.flag = this.flag.bind(this);
  }
  componentDidMount() {
    this.setState({
      comments: this.props.post.comments,
      likes: this.props.post.likes, 
    });
  }
  addComment(e) {
    e.preventDefault();
    const nComment = { username: 'Thomas', text: this.state.newComment, };
    this.setState({ 
      comments: [...this.state.comments, nComment], 
      newComment: '', 
    });
  }
  typeComment(event) {
    this.setState({ newComment: event.target.value, });
  }
  addLike(loved) {
    if (loved) this.setState({ likes: ++this.state.likes });
    else this.setState({ likes: --this.state.likes });
  }
  flag() {
    this.setState({ flagged: !(this.state.flagged) });
  }
  render() {
    return (
      <div className='post-container' 
        style={{ 
          'outline': this.state.flagged 
            ? 3 + 'px solid salmon' 
            : 1 + 'px solid lightgray' 
        }}>
        <span className='user-tag'>
          <img className='post-icon' src={ this.props.post.thumbnailUrl } />
          <h2>{this.props.post.username}</h2>
        </span>
        <img src={ this.props.post.imageUrl } style={{ maxWidth:500 + 'px' }} />
        <div className='post-misc'>
          <Heart addLike={ this.addLike } />
          <span>likes: {this.state.likes}</span>
          <span>{ moment(`${this.props.post.timestamp}`, "MMMDD YYYY HH:mm:ss a", 'en').fromNow() }</span>
        </div>
        {this.state.comments.map(comment => {
          return (
            <span className='post-comments'>
              <span className='comment-user'>{ `${comment.username} ` }</span>
              { comment.text }
          </span> 
          );
        })}
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