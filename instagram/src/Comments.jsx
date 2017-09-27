import React, { Component } from 'react';
import { Username } from './Post';
import defaults from './defaults';
import './Comments.css';

export default class Comments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comments-wrapper">
        <ul className="comments">
          {this.props.comments.map((comment, index) => {
            return (
              <li className="comments-item" key={index}>
                <Comment username={comment.username} text={comment.text}/>
              </li>
            );
          })}
        </ul>
        <CommentBar ref="bar" onAddComment={this.props.onAddComment}/>
      </div>
    );
  }
}

export function Comment(props) {
  return (
    <div className="comment">
      <Username username={props.username || defaults.post.username}/>
      <span className="text">{props.text || defaults.comments.comment}</span>
    </div>
  );
}

export function Mention(props) {
  return (
    <span className="mention">{props.username || defaults.post.username}</span>
  );
}

export class CommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onPost = this.onPost.bind(this);
    this.display = this.display.bind(this);
    this.requestFocus = false;
  }

  onComponentWillMount() {
    this.setState({styles: {}});
  }

  componentDidUpdate() {
    if (this.requestFocus) {
      this.refs.input.focus();
      this.requestFocus = false;
    }
  }

  display() {
    this.requestFocus = true;
    this.setState({styles: {display: 'block'}});
  }

  onKeyPress(target) {
    if (target.charCode === 13) {
      this.props.onAddComment(defaults.comments.username, this.refs.input.value || defaults.comments.comment);
      this.refs.input.value = "";
    }
  }
  onPost(event) {
    this.onKeyPress({charCode: 13});
  }

  render() {
    return (
      <div className="comment-bar" style={{...this.state.styles}}>
        <hr/>
        <span className="span-menu"><CommentMenuButton /></span>
        <span className="span-post"><button onClick={this.onPost}>Post</button></span>
        <span className="span-input"><input type="text" placeholder="Add a comment..." className="input" ref="input" onKeyPress={this.onKeyPress}/></span>
      </div>
    );
  }
}

export function CommentMenuButton(props) {
  return (
    <div className="comment-menu">
      <button href="javascript:void(0);" className="comment-menu-button">
        <i className={`${defaults.comments.icons.menu}`}></i>
      </button>
      <ul className="comment-menu-list" style={{display: 'none'}}>
        {defaults.comments.options.map((option, index) => {
          return (
            <li className="comment-menu-item" key={index}>
              <span className="option">{option}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
