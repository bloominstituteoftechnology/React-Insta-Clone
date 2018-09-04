import React, { Component } from 'react';
import './CommentSection.css'
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        index: props.comments.length
      };
    }
  
    // Adds a new comment
    addNewComment = (event, index) => {
        console.log(event, index);
        let comm = {
            username: 'Nicocchi',
            text: event
        };

        let coms = this.state.comments.slice();

        coms.push(comm);
        coms.join();
        console.log(coms);

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