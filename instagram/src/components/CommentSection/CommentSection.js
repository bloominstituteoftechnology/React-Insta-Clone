import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    
    render() {
        return (
            <div>
                {console.log(this.state.comments)}
                { this.state.comments.map((comment, index) =>  {
                    return [ 
                    <div key={index}>
                        <h1> {comment.username} </h1>
                        <p> {comment.text} </p>
                    </div>
                    ]
                })}
            </div>
        )
    }
}

export default CommentSection;