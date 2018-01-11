import React, { Component } from 'react';

class CommentSection extends Component {
    render() {
        return (
            <div>
                <div>
                    {props.comments.map((comment, index) => {
                        return <div key={index}>
                            {comment.username} {' '} {comment.text}
                        </div>
                    })}
                </div>
                <div>
                    <input placeholder="Add a comment..." />
                </div>
            </div>
        );
    }
}


export default CommentSection;