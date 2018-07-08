import React, { Component } from 'react';

import './CommentSection.css'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    
    render() {
        return (
            <div className="CommentSection">
                { this.state.comments.map((comment, index) =>  {
                    return [ 
                    <div key={index} className="Comment">
                        <h1 className="Comment__H1"> {comment.username} </h1>
                        <p> {comment.text} </p>
                    </div>
                    ]
                })}
                <p className="CommentSection__Timestamp">2 HOURS AGO</p>
                <div className="CommentSection__AddComment">Add a comment...</div>
            </div>
        )
    }
}

export default CommentSection;