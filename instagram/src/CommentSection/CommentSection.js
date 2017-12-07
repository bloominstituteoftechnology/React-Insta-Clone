//The CommentSection component will receive the array of comments
// as props and render each one with the username of the poster 
//as well as the post's text. Additionally,
// an input box that allows users to submit a new comment for any post.
// Since there is no login page or anything of that sort, hard code a static username.
/*import React, { Component } from "react";

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addComment = e => {
    e.preventDefault();
    const commentObj = {
      username: "Sean",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, commentObj],
      newComment: ""
    });
  };

  handleCommentInput = e => {
    this.setState({ newComment: e.target.value });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments
          ? this.state.comments.map((comment, i) => (
              <div className="comment" key={i}>
                <div className="comment-user">
                  <b>{comment.username}</b>
                </div>
                <div className="comment-text">{comment.text}</div>
              </div>
            ))
          : null}
        <div className="comment-input">
          <input
            type="text"
            placeholder="..."
            value={this.state.newComment}
            onChange={this.handleCommentInput}
          />
          <button type="submit" onClick={this.addComment}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CommentSection;  */

import React, {Component} from 'react';


class CommentSection extends Component{
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({ 
            comments: this.props.comments
        }); //method that react exposes to developer - any comment you wanna mount after mounting, do it here?
    }

    addComment = (e) => {
        e.preventDefault();  //dont wanna hard refresh
        const commentObj = {
            username: 'Stephanie',
            text: this.state.newComment
        };
        const commentArray = this.state.comments;
        commentArray.push(commentObj);
        this.setState({
            comments: commentArray,
            newComment: ''
        });
    }
    handleCommentInput = (e) => {
        this.setState({ newComment: e.target.value });

    }

    render () {
        return (
            <div className="comment-section">
            {this.state.comments? this.state.comments.map((comment, i) => (
                <div className= "comment" key= {i}>
                <div className= "comment-user"><strong>{comment.username}</strong></div>
                <div className= "comment-text">{comment.text}</div>
                </div>)
                ) :null }
            <div className="comment-input">
            <input type= "text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput}/>
            <button type="submit" onClick= {this.addComment}>Submit</button>
            </div>
            </div>
        );
        }

    }

    export default CommentSection;  