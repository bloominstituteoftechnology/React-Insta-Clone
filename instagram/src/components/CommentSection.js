import React, { Component } from 'react';

import '../assets/css/comments.css';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    addComment = () => {
        this.props.addComment(this.state.comment.trim());
    }
    handleChange = (event) => {
        const comment = event.target.value.replace('\n', '');
        this.setState({
            comment
        })
    }
    handleKeyDown = (event) => {
        if(event.keyCode === 13 && this.state.comment) {
            this.addComment()
            this.setState({
                comment: ''
            })
        }

    }
    render() {
        const { comments } = this.props;
        return (
            <section className="comments">
                { comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <span className="username">{comment.username}</span>
                        <span className="text">{comment.text}</span>
                    </div>
                ))}
                { this.props.children }
                <div className="comments__add">
                    <form onSubmit={this.addComment}>
                        <textarea value={this.state.comment} onChange={this.handleChange} placeholder="Add comment..." onKeyDown={this.handleKeyDown}></textarea>
                    </form>
                </div>
            </section>
        )
    }
}