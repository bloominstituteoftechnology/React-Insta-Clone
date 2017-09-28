import React, { Component } from 'react';
import Comments, { CommentMenuButton } from './Comments';
import defaults from './defaults';
import './Post.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLike = this.onLike.bind(this);
    this.onUnlike = this.onUnlike.bind(this);
    this.onRequestComment = this.onRequestComment.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.onImageDoubleClick = this.onImageDoubleClick.bind(this);
    this.onAddComment = this.onAddComment.bind(this);
    this.prevClick = {time: null, x: null, y: null};
  }

  componentWillMount() {
    this.setState({
      _username: this.props.username,
      _profileImage: this.props.profileImage,
      _postImage: this.props.postImage,
      _comments: this.props.comments,
      _likes: this.props.likes
    });
  }

  set username(username) {
    this.setState({_username: username});
  }
  set profileImage(profileImage) {
    this.setState({_profileImage: profileImage});
  }
  set postImage(postImage) {
    this.setState({_postImage: postImage});
  }
  set comments(comments) {
    this.setState({_comments: comments});
  }
  set likes(value) {
    if (isNaN(value))
      return;
    this.setState({_likes: value});
  }

  get username() {
    return this.state._username || defaults.post.username;
  }
  get profileImage() {
    return this.state._profileImage || defaults.post.images.profile;
  }
  get postImage() {
    return this.state._postImage || defaults.post.images.post;
  }
  get likes() {
    return this.state._likes || 0;
  }
  get comments() {
    return this.state._comments || [];
  }

  onLike(event) {
    this.likes++;
  }
  onUnlike(event) {
    this.likes--;
  }
  onRequestComment(event) {
    this.refs.comments.refs.bar.display();
  }
  onImageClick(event) {
    if (this.prevClick.time === null) {
      this.prevClick.time = new Date();
      this.prevClick.x = event.pageX;
      this.prevClick.y = event.pageY;
      return;
    }
    if (new Date() - this.prevClick.time <= 300){
      this.prevClick.time = null;
      if (Math.abs(this.prevClick.x - event.pageX) <= 30)
        if (Math.abs(this.prevClick.y - event.pageY) <= 30)
          this.onImageDoubleClick();
    }
    this.prevClick.time = null;
    this.prevClick.x = null;
    this.prevClick.y = null;
    setTimeout(() => {
      if (new Date() - this.prevClick.time <= 300) {
        this.prevClick.time = null;
        this.prevClick.x = null;
        this.prevClick.y = null;
      }
    }, 300);
  }
  onImageDoubleClick() {
    this.refs.heart.refs.anchor.click();
    console.log("clicked");
  }
  onAddComment(username, text) {
    this.comments = this.comments.concat([{username, text}]);
  }

  render() {
    return (
      <div className="post">
        <div className="top-wrapper">
          <div className="user">
            <span className='top-comment-menu'><CommentMenuButton /></span>
            <img src={this.profileImage} alt="" className="profile-image" draggable="false" onMouseDown={() => false}/>
            <Username username={this.username}></Username>
          </div>
          </div>
        <div className="image-wrapper">
          <img src={this.postImage} alt="post" className="image" onClick={this.onImageClick} draggable="false" onMouseDown={() => false}/>
        </div>
        <div className="bottom-wrapper">
          <div className="likes-wrapper">
            <Likcon type="heart" ref="heart" onLike={this.onLike} onUnlike={this.onUnlike} />
            <Likcon type="reply" onRequestComment={this.onRequestComment} />
            <Likcon type="send" />
            <Likes likes={this.likes}></Likes>
          </div>
          <Comments className="comments" ref="comments" comments={this.comments} onAddComment={this.onAddComment}></Comments>
        </div>
      </div>
    );
  }
}

export function Username(props) {
  return(
    <button className="username"><h3>{props.username}</h3></button>
  );
}

export class Likcon extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.touched = false;
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  componentWillMount() {
    this.setState({solid: false, glowing: false, color: 'inherit'});
  }

  get config() {
    return defaults.post.icons[this.type];
  }
  get color() {
    return this.state.color;
  }
  get type() {
    return this.props.type;
  }
  get isGlowing() {
    return this.state.glowing;
  }
  get isSolid() {
    return this.state.solid;
  }
  onMouseEnter(event) {
    if (!this.touched) {
      this.setState({color: this.config.color});
      this.setState({glowing: true});
    }
  }
  onMouseLeave(event) {
    if (!this.touched) {
      if (!this.isSolid)
        this.setState({color: 'inherit'});
      this.setState({glowing: false});
    }
  }
  onTouchStart(event) {
    if (this.touched)
      this.touched = false
    this.onMouseEnter(event);
    this.touched = true;
  }
  onTouchEnd(event) {
    setTimeout(() => {this.touched = false; this.onMouseLeave()}, 400);
  }
  onClick(event) {
    if (this.type === 'heart') {
      if (this.isSolid){
        this.props.onUnlike(event);
        if (!this.isGlowing)
          this.setState({color: 'inherit'});
      } else {
        this.props.onLike(event);
        this.setState({color: this.config.color});
      }
      this.setState({solid: !this.isSolid});
    }
    if (this.type === 'reply')
      this.props.onRequestComment(event);
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <button href="javascript:void(0);" className={this.type} ref="anchor" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onClick} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} style={{color: this.color}}>
        <div style={{display: this.isSolid ? "inline" : "none"}}>
          <i className={this.config.solid}></i>
        </div>
        <div style={{display: !this.isSolid ? "inline" : "none"}}>
          <i className={this.config.light}></i>
        </div>
      </button>
    );
  }
}

export function Likes(props) {
  const convertNum = (num) => {
    if (num < 1000)
      return num;
    num = num.toString().split('');
    for (let i = num.length-2; i >= 0; i--) {
      if (3 % i === 0) {
        num[i] = ',' + num[i];
      }
    }
    return num.join('');
  };
  return(
    <button href="javascript:void(0);" className="likes">{convertNum(props.likes)} likes</button>
  );
}
