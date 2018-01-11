import React, { Component } from 'react';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            newComment: '',
            allComments: []

        }
    }

    componentDidMount = () => {
        this.setState({
            allComments: this.props.comments
        })
    }

    onChange = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    addComment = () => {
        const myComment = this.state.newComment;
        const myEntireComment = {
            username: 'Clara',
            text: myComment
        };
        const allComments = this.state.allComments;
        allComments.push(myEntireComment);
        this.setState({
            allComments,
            newComment: ''
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.allComments.map((comment, index) => {
                        return <div key={index}>
                            {comment.username} {' '} {comment.text}
                        </div>
                    })}
                </div>
                <div>
                    <input placeholder="Add a comment..." value={this.state.newComment} onChange={this.onChange}/>
                    <button onClick={this.addComment}>Submit</button>
                </div>
            </div>
        );
    }
}


export default CommentSection;