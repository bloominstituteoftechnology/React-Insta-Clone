import React, { Component } from 'react';
import './CommentSection.css'
import Comment from './Comment';
import CommentInput from './CommentInput';
class CommentSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        index: props.comments.length,
        username: props.username,
      };
    }
  
    // Adds a new comment
    addNewComment = (event, index) => {

        // Create a new comment object with the user's username and text
        let comm = {
            username: this.props.username,
            text: event
        };

        // Split the original state of the comments
        let coms = this.state.comments.slice();

        // Add the new comment in
        coms.push(comm);
        coms.join();

        // Set the state to the new comments
        this.setState({
            comments: coms
        });
    };
  
    render() {
        return (
            <div className="comment-container">
                {this.state.comments.map((comment) => <Comment key={comment.username + Math.floor(Math.random() * 1000) + 1} data={comment} />)}
    
                <CommentInput addNewCom={this.addNewComment} ind={this.state.index} />
            </div>
        );
    }
}

export default CommentSection;