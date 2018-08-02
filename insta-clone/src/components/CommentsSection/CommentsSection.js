import React from 'react';
import './CommentsSection.css';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
      likes: props.likes
    }
  }

  incrementLikes = event => {
    let likes = this.state.likes;
    likes++;
    this.setState({ likes: likes });
  }

  addComment = event => {
    let currentComments = this.state.comments;
    currentComments.push({
      username: localStorage.getItem('user'),
      text: event.target.value
    });
    event.target.value = '';
    this.setState({ currentComments });
    this.saveState();
  }

  saveState = () => {
    let comments = JSON.stringify(this.state.comments);
    let likes = JSON.stringify(this.state.likes);

    localStorage.setItem('comments', comments);
    localStorage.setItem('likes', likes);
  }

  componentDidMount() {
    let comments = JSON.parse(localStorage.getItem('comments'));
    let likes = JSON.parse(localStorage.getItem('likes'));

    if(comments) {
      this.setState({ comments: comments });
    }
    if(likes) {
      this.setState({ likes: likes });
    }
  }

  render() {
    return(
      <div className='comment-container'>
        <h4>{this.state.likes} likes</h4>
        <div className='buttons'>
          <i className='far fa-heart' onClick={ this.incrementLikes } />
          <i className='far fa-comment' />
        </div>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className='comment'>
              <h1 className='username'>{comment.username}</h1>
              <p className='text'>{comment.text}</p>
            </div>
          )
        })}
        <input className='new-comment' placeholder='Comment...' onKeyPress={e => {if (e.charCode === 13) {
          this.addComment(e)
        }}} />
      </div>
    )
  }
}

export default CommentsSection;
