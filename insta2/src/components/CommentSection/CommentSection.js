import React, { Component } from 'react';

import './commentSection.css';

class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: props.data,
            newComment: ''
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({ 
            data: [
                ...this.state.data,
                {
                    username: 'danfrrr13',
                    text: this.state.newComment,
                },
            ],
            newComment: ''
        })
    }

    render() {
        return(
            <div className="CommentSection">
                {this.state.data.map((comment, index) => {
                    return(
                        <div key={index}>
                            <strong>{comment.username}</strong> {comment.text}
                        </div>
                    )
                })}
                
                <form onSubmit={this.addNewComment}>
                    <input className="newComment" type="text" value={this.newComment} onChange={(event) => this.changeHandler(event)} name="newComment" placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
}

export default CommentSection;