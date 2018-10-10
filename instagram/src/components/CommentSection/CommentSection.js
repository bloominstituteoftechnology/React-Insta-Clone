
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
          images: props.data.image,
          likes: props.data.likes,
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

      addNewComment = (event) => {
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

      enterHandler = event => {
        if (event.keyCode === 13 && event.shiftKey === false) {
          if (this.state.input.length >= 1)
            event.preventDefault();
          this.addNewComment(event);
        }
      };

      addLike = event => {
        this.setState({ 
            likes: this.state.likes + 1
        });
      }


    render() {
    return (
        
            <div className="comments">
                <div className="like_comment">
                <i onClick={this.addLike} class="far fa-heart fa-2x"></i>
                <i class="far fa-comment fa-2x"></i>
                </div>
                <p><strong>{this.state.likes} likes</strong></p>
                {this.state.comments.map((comment =>
                    <div>
                        <p><strong>{comment.username}</strong><span> {comment.text}</span></p>
                    </div>
                    ))}
                <p>{this.props.data.timestamp}</p>

                <form onSubmit={this.addNewComment}>
                    <textarea
                        value={this.state.input} 
                        onChange={this.commentHandler} 
                        onKeyDown={this.enterHandler} 
                        placeholder="Add a comment..."
                         />
                </form>
                
            </div>
            
    )
}

}

export default CommentSection;