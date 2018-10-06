
import React, { Component } from 'react';
// import {
//     CardImg,
//     Card,
//     CardTitle,
   
//   } from 'reactstrap';
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: props.data.comments,
          images: props.image,
          likes: props.likes,
          input: '',
        }
      }

    commentHandler = (event) => {
        const {value} = event.target;
        // console.log(value);
        this.setState({
          input: value,
        });
      };

      submitHandler = (event) => {
        if (this.state.input) {
            this.setState({
                comments: [
                    ...this.state.comments,
                    {
                        username: "unknown",
                        text: this.state.input
                    }
                ]
            });
            event.currentTarget.value = null;
        }
      };

      handleSubmit = event => {
        if (event.keyCode === 13 && event.shiftKey === false) {
          if (this.state.text.length >= 1)
            event.preventDefault();
          this.submitHandler(event);
        }
      };

    render() {
    return (
        
            <div className="comments">
                <div className="like_comment">
                <i class="far fa-heart fa-2x"></i><i class="far fa-comment fa-2x"></i>
                </div>
                <p><strong>{this.props.data.likes} likes</strong></p>
                {this.state.comments.map((comment =>
                    <div>
                        <p><strong>{comment.username}</strong><span> {comment.text}</span></p>
                    </div>
                    ))}
                <p>{this.props.data.timestamp}</p>
                <input value={this.state.input} onChange={this.commentHandler} onKeyDown={this.enterHandler} defaultValue="Add a comment..."></input>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
            
    )
}
}

export default CommentSection;