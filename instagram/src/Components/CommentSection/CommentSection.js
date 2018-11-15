import React from 'react';
import './CommentSection.css'
import Comments from './Comments'
import CommentInput from './CommentInput.js'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      timestamp: props.timestamp,
      inputText: '',
      user: props.user,
      isLiked: false,
    }
  }

  handleOnSubmit = (e, index) => {
    e.preventDefault();

    this.setState({
      comments: [...this.state.comments, {username: this.state.user, text: this.state.inputText}],
      inputText: '',
    })

  }

  handleOnChange = (e) => {
    this.setState({
      inputText: e.target.value,
    })
  }

  likesOnClick = (e) => {
    console.log('here in likes')
    let likeNum = this.state.likes;

    this.setState({
      isLiked: !this.state.isLiked,
      likes: this.state.isLiked ? likeNum - 1 : likeNum + 1,
    })
  }

  render() {
    return (
      <div className={'comments-container'}>

        <div className='like-buttons'>
          <i onClick={this.likesOnClick} className="far fa-heart icon-comment"></i> 
          <i className="far fa-comment rotate-font icon-comment"></i>
          <div className='likes'>{this.state.likes} likes</div>
        </div>

        <ul>
          {this.state.comments.map( (comment, index) => {
            return <Comments 
              key={index}
              index={index}
              comments={comment}/>
          })}
        </ul>
        <div className={'timestamp'}>{this.state.timestamp}</div>

        <CommentInput 
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          inputText={this.state.inputText}
          username={this.state.username}/>
  
      </div>
      
    );
  }
}

export default CommentSection;