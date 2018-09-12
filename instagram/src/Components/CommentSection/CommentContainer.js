import React, { Component } from 'react';
import Comment from './Comment';
//import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Heart from '../../photos/heart.svg';
import './Comment.css';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: '',
            likes:0
        }
    }
    
    
    addNewComment = e => {
        console.log('addComment');
        e.preventDefault();
          this.setState({
            comments: [...this.state.comments, { text: this.state.newComment, username: "User" }],
            newComment: ""
          },()=> console.log("newstate",this.state));
         
        };
        

      handleInput = e => {
          e.preventDefault();
          console.log('handleInput');
        this.setState({[e.target.name]:e.target.value
        });
      };

      increaseLikes = e => {
          e.preventDefault();   
          this.setState({likes: this.state.likes + 1});
      }
    
    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.likes}
                <img onClick={this.increaseLikes} alt='heart' src= {Heart} className="logo-likes" />
                {this.state.comments.map((comment, i) => <Comment key={i} comments={comment} /> )}  <CommentInput
                    addNewComment={this.addNewComment}
                    handleInput={this.handleInput}
                    />
            </div>
        );
    }
}

// Comment.propTypes = {
//     comments: PropTypes.arrayOf(
//       PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
//     )
//   };

export default CommentContainer;

