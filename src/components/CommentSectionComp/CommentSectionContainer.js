import React from 'react';
import './comment-section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faComment as faSComment } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment.js';

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      input: '',
      shouldAddComment: false,
      shouldAddLike: false,
      likes: props.likes,
      user: ''
    }
  }

  /*Local Storage*/ 
  componentDidMount() {
    const commentId = this.props.commentId;
    const likeId = this.props.likeId;
    const shouldLikeId = this.props.shouldLikeId;
    this.setState({user: localStorage.getItem('user')});

    if (localStorage.getItem(commentId)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(commentId)),
      });
    } else {
      this.setComments();
    }

    if (localStorage.getItem(likeId)) {
      this.setState({
        likes: JSON.parse(localStorage.getItem(likeId)),
        shouldAddLike: JSON.parse(localStorage.getItem(shouldLikeId)),
      });
    } else {
      this.setLikes();
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  handleChange = e => this.setState({ input: e.target.value });

  /*Adding and Setting comments*/
  shouldAddComment = () => {
    this.setState(prevState => {
      return {shouldAddComment: !prevState.shouldAddComment};
    })
  }

  addComment = (e) => {
    let comments = this.state.comments.slice();
    comments.push({
      username: this.state.user,
      text: this.state.input,
    });
    this.setState(prevState => {
      return {
        shouldAddComment: !prevState.shouldAddComment, 
        comments: comments, 
        input: ''
      };
    });
    setTimeout(() => {
      this.setComments();
    }, 500);
    e.preventDefault();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.commentId,
      JSON.stringify(this.state.comments)
    );
  };

  /*Adding and Setting likes*/
  addLike = () => {
    if (!this.state.shouldAddLike) {
      this.setState(prevState => {
        return {
          likes: prevState.likes + 1,
          shouldAddLike: !prevState.shouldAddLike
        }
      });
      setTimeout(() => {
      this.setLikes();
    }, 500);
    } else {
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1,
          shouldAddLike: !prevState.shouldAddLike
        }
      });
        setTimeout(() => {
      this.setLikes();
    }, 500);
    }
  }

  setLikes = () => {
    localStorage.setItem(
      this.props.likeId,
      JSON.stringify(this.state.likes)
    );
    localStorage.setItem(
      this.props.shouldLikeId,
      JSON.stringify(this.state.shouldAddLike)
    );
  }

  render() {
    return (
      <section className="main-post__comment-section">
        <div className="comment-section__top">

          {/*Dynamic Icons and Likes*/}
          <div className="comment-section__icons">
            <div className="comment-section__icon--like">
              <FontAwesomeIcon 
                onClick={this.addLike} 
                icon={this.state.shouldAddLike ? faSHeart : faHeart} 
              />
            </div>
            <div className="comment-section__icon--comment">
              <FontAwesomeIcon 
                onClick={this.shouldAddComment} 
                icon={this.state.shouldAddComment ? faSComment : faComment} 
              />
            </div>
          </div>
          <div className="comment-section__likes">
            <p><strong>{this.state.likes} likes</strong></p>
          </div>
        </div>

        {/*Comment Component*/}
        {this.state.comments.map((comment, index) => 
          <Comment key={index} username={comment.username} text={comment.text} />
        )}

        {/*Timestamp*/}
        <div className="comment-section__timestamp">
          <p><strong>{this.state.timestamp}</strong></p>
        </div>

        {/*Dynamic User Comment Input*/}
        {this.state.shouldAddComment ?
          <form className="comment-section__input" onSubmit={this.addComment}>
            <input
              onChange={this.handleChange}
              placeholder="Add comment..."
              value={this.state.input}
              type="text"
            />
            <span>...</span>
          </form>
        : null}
      </section>
    );
  }
}

export default CommentSectionContainer;