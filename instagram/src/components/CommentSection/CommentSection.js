
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

    render() {
    return (
        
            <div className="comments">
                <div className="like_comment">
                <i class="far fa-heart fa-2x"></i><i class="far fa-comment fa-2x"></i>
                </div>
                <p><strong>{this.props.data.likes} likes</strong></p>
                {this.props.data.comments.map((comment =>
                    <div>
                        <p><strong>{comment.username}</strong><span> {comment.text}</span></p>
                    </div>
                    ))}
                <p>{this.props.data.timestamp}</p>
                <input value={this.state.input} onChange={this.commentHandler} defaultValue="Add a comment..."></input>
            </div>
            
    )
}
}

export default CommentSection;