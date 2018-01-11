import React, { Component } from 'react';

class CommentSection extends Component{
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    addComment = (event) => {
        event.preventDefault();
        const comment = {
            username: 'John',
            text: this.state.newComment
        };
        const comArr = this.state.comments;
        comArr.push(comment);
        this.setState({
            comments: comArr,
            newComment: ''
        });
    }

    handleCommentInput = (event) =>  {
        this.setState({
            newComment: event.target.value
        });
    }

    render() {
        return (
            <div className="comment-section">
            {this.state.comments ? this.state.comments.map((comment, index) => (
                <div className= "comment" key= {index}>
                <div className= "comment-user"><strong>{comment.username}</strong></div>
                <div className= "comment-text">{comment.text}</div>
                </div>)
            )   :null }
            <div className="comment-input">
            <input type= "text" placeholder="..." value={this.state.newComment} onChange= {this.handleCommentInput}/>
            <button type= "submit" onClick= {this.addComment}>Submit</button>
            </div>
            </div>            
        );
    }
}

export default CommentSection;