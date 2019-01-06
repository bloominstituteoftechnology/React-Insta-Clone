import React, { Component } from 'react';
import NewComment from './NewComment';
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            // newComment: {
            //     username: '',
            //     text:''
            // }
            newComment:''
        }
    }

    

    handleCommentInput = (e) => {
        // console.log(e.target.value);
        this.setState({ newComment: e.target.value })
    }

    AddComment = (e) => {
        console.log('clicked button');
        e.preventDefault();
        const commentListArray = this.state.commentList;
        const newComment = this.state.newComment;
        commentListArray.push(newComment);
        this.setState({
            commentList: commentListArray,
            newComment:'',
            // newComment: {
            //     username: '',
            //     text:''
            // }
        })
    }
    
    render() {
        const { comments } = this.props;
        const { newComment } = this.state;
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
                                    {/*<div>{comment.text}</div>*/}
                                    </div>
                                )
                            })}</div>
                            <div>
                                {/*<NewComment
                                    placeholder="enter a username"
                                    name="new comment"
                                    type="text"
                                    onChange={this.handleInput} 
                                    value={username}
                                />*/}
                                {/*<NewComment
                                    placeholder="enter a comment"
                                    name="comment"
                                    type="text"
                                    onChange={this.handleInput} 
                                    value={newComment}
                                />*/}
                                <input 
                                    placeholder="enter a comment"
                                    name="comment"
                                    type="text"
                                    value={newComment}
                                    onChange={this.handleCommentInput}
                                    onSubmit={this.AddComment}
                                />
                                {/*<button onClick={this.AddComment}>Add Comment</button>*/}
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
                
