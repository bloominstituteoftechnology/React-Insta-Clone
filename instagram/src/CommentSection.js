import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import CommentField from './CommentField';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.postData.comments,
      hearts: this.props.postData.likes
    };
    this.onSave = this.onSave.bind(this);
    this.onHeart = this.onHeart.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  onSave(comment) {
    this.setState({
      comments: [...this.state.comments, {username: "RandomUser", text: comment}]
    });
  }

  onHeart(e) {
    e.preventDefault();
    const newHearts = ((this.state.hearts > this.props.postData.likes) ? (this.state.hearts - 1) : (this.state.hearts + 1));
    this.setState({
      hearts: newHearts
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.postData.comments,
      hearts: nextProps.postData.likes
    });
  }

  clickHandler(e) {
    e.preventDefault();
    ReactDom.findDOMNode(this.commentFieldRef).focus();
  }

  render() {
    let imgSource = ((this.state.hearts > this.props.postData.likes) ? "http://i.imgur.com/AqiwoAc.png" : "https://d30y9cdsu7xlg0.cloudfront.net/png/65570-200.png");
    return (
      <div className="comment-section">
        <div className="like-section">
          <a onClick={this.onHeart} href=""><img className="heart-icon" src={imgSource} /></a>
          <a onClick={this.clickHandler.bind(this)} href="#"><img className="bubble-icon" src="http://i.imgur.com/TEYiH4l.png" /></a>
        </div>
        <div className="likes"><p>{this.state.hearts} likes</p></div>
        <div className="comments-div">
          <ul className="comments">
            {this.state.comments.map((prop, i) => {
              return <li key={i}><strong>{prop.username}</strong>{prop.text}</li>
            })}
          </ul>
        </div>
        <div className="comment-field"><CommentField ref={(c)=>this.commentFieldRef=c} onSave={this.onSave} /></div>
      </div>
    );
  }
}

export default CommentSection;
