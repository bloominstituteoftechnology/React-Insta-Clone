import React from 'react';
import './CommentsSection.css';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
      likes: props.likes,
      username: props.user
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
    let data = JSON.stringify(this.state.comments);
    data = '{"data":'+data+',"likes":'+this.state.likes+'}';
    let user = this.state.username;
    localStorage.setItem(user, data);
  }

  componentDidMount() {
    if (localStorage.getItem(this.state.username)) {
      let data = JSON.parse(localStorage.getItem(this.state.username));
      this.setState({
        comments: data.data,
        likes: data.likes
      })
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
