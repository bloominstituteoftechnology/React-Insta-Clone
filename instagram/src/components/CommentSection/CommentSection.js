import React, { Component } from 'react';

import './CommentSection.css';

class CommentSection extends Component {

    constructor(props) {
        super();

        this.state = {
            username: "troy",
            comments: [],
            newCommentText: "",
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    submitNewComment = (event) => {
        if (event.keyCode === 13) {
            const newComment= {
                username: this.state.username,
                test: this.state.newCommentText,
            }

            this.setState({
                comments: [...this.state.comments, new],
                newCommentText: ""
            })
        }
    }


    updateNewComment = (event) => {
        this.setState({
            newCommentText: event.target.value
        });
    }

    render () {
        return (
            <div className="CommentSection">
                <div className="CommentSection__list">
                    {this.state.comments.map((comment, index) => {
                        return (
                            <div className="CommentSection__comment" key={index}>
                                <h4 className="CommentSection__comment-username">{comment.username}</h4>
                                <p className="CommentSection__comment-body">{comment.text}</p>
                            </div>
                        )
                    })}
                </div>

                {this.props.children}

                <div className="CommentSection__add">
                    <input  
                        className="CommentSection__addField"
                        type="text"
                        value={this.state.newCommentText}
                        onChange={this.updateNewComment}
                        onKeyDown={this.submitNewComment}
                        placeholder="Care to add to the discussion?"
                    ></input>                                           // this is the coolest form, I was going to use this no matter what!
                </div>
            </div>
        );
    }
}

export default CommentSection;