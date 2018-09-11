import React, { Component } from 'react';
import Comment from './Comment';
//import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: ''
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
    
    render() {
        console.log(this.state);
        return (
            <div>
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

