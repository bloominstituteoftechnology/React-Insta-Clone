import React, { Component } from 'react';
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: {
                username: 'a_new_user',
                text: ''
            }
        }
    }

    handleCommentInput = (e) => {
        this.setState({ 
            newComment: {
                username: this.state.newComment.username,
                text: e.target.value 
            }
        })
    }

    AddComment = (e) => {
        e.preventDefault();
        const commentListArray = this.state.comments;
        const newComment = {
            username: this.state.newComment.username,
            text: this.state.newComment.text
        };
        commentListArray.push(newComment);
        this.setState({
            commentList: commentListArray,
            newComment: {
                username: 'a_new_user',
                text: ''
            }
        })
    }
    
    render() {
        const { comments } = this.props;
        const { text } = this.state.newComment;
        return (
            <div className="Comments">
                <div> {comments.length === 0 ? (
                    <p>"no props yet"</p>
                    ) : (
                        <div>
                            <div>{comments.map((comment, i) => {
                                return (
                                    <div key={i}>
                                    <div>{`${comment.username} says ${comment.text}`}</div>
                                    </div>
                                )
                            })}</div>
                            <div>
                                <form onSubmit={this.AddComment}>
                                    <input 
                                        placeholder="enter a comment"
                                        name="comment"
                                        type="object"
                                        value={text}
                                        onChange={this.handleCommentInput}
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}
                
export default Comments;
                
