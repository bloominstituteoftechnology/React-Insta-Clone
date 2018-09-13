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

    handleInput = e => {
        e.preventDefault();
        console.log('handleInput');
      this.setState({[e.target.name]:e.target.value});
    };
    
    
    addNewComment = e => {
        e.preventDefault();
          this.setState({
            comments: [...this.state.comments, { text: this.state.newComment, username: "Mack" }],
            newComment: ""});  
    };
        

    increaseLikes = e => {
          e.preventDefault();   
          this.setState(prevState =>{
              return {likes: prevState.likes + 1}
            });
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
                    comment = {this.state.newComment}
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

