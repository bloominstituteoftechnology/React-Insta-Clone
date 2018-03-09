import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import './CommentSection.css';
import Moment from 'react-moment';

class CommentSection extends Component {
    
    constructor(props) {
        super();
        this.state = {
            id: 0,
            comments: [],
            newComment: '',
            timestamp: '',
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            comments: this.props.comments,
            timestamp: this.props.timestamp,
        });
    }

    addComment = (event) => {
        if (event.keyCode === 13) {
        event.preventDefault();
        const newComment = {
            username: 'AD & Josh',
            text: this.state.newCommentInput,
        }

        this.setState({
            comments: [...this.state.comments, newComment],
            newCommentInput: ''
        });
        }
    }

    handleCommentInput = (event) => {
        this.setState({ newCommentInput: event.target.value });
    }

render() {
    return (
        <div className="CommentSection">
            <div className="CommentSection__comment_list">
             {this.state.comments.map((comment, index) => {
                 return (
                    <div className="CommentSection__comment" key={index}>
                        <span className="CommentSection__comment-user">{comment.username}</span>
                        <span className="CommentSection__comment-text">{comment.text}</span>
                    </div>
                    
                 );
         })}
            </div>
            <div className="CommentSection__timestamp">
             <span className="text-uppercase font-weight-light text-muted"><Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>{this.state.timestamp}</Moment></span>
            </div>

            <div className="CommenSection__addComment mt-2 pt-3 border-top">
            
                <Input id={`CommentSection__${this.state.id}`} type="text" placeholder="Add a comment..." value={this.state.newCommentInput} onChange={this.handleCommentInput} onKeyDown={this.addComment} />

            </div>
        </div>
    );
}

};

export default CommentSection;