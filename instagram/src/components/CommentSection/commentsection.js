import React, { Component } from 'react';
import './commentsection.css';

import CommentInput from './commentinput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
            extras: props.extras,
            comment: ''
        }
    } 
    addComment = event => {
        event.preventDefault();
        const newComment = { text: this.state.comment, username: 'Braff Zacklin' };
        const comments = this.state.comments.slice();
        if (this.state.comment ===''){
            return;
        }else{
            comments.push(newComment);
            this.setState({ comments, comment: '' });
            console.log(this.state.comment)
        }
    };
    render() {
        return (
            <div className = 'comment-container'>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <h2 className= 'likes'>{this.state.extras.likes} likes</h2> 
                {this.state.comments.map((comments, i) => 
                    <div key= {i} className= 'comment-combo'>
                        <h3 className= 'commenter'>{comments.username}</h3>
                        <p className= 'comment-text'>{comments.text}</p>
                    </div>)} 
                <p className= 'timestamp'>{this.state.extras.timestamp}</p>   
                <CommentInput 
                    comment= {this.state.comment}
                    handleInputChange={this.handleInputChange}
                    addComment={this.addComment}  />           
            </div>
        );
    }    
}



export default CommentSection;