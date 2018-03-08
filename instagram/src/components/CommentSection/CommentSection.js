import React, { Component } from 'react';
import AddComment from './../AddComment/AddComment.js';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    };


    componentDidMount() {
        this.setState({comments: this.props.comments});
    };

    addNewComment = (newComment) => {
        //event.preventDefault();
        const tempComments = this.state.comments;
        tempComments.push(newComment);
        this.setState({comments: tempComments});

    };

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return (
                        <div className={'row'}>
                            <div className={'col-3 username commentUserName'}>{comment.username}</div>
                            <div className={'col-9 d-flex align-items-center commentBox'}><p>{comment.text}</p></div>
                        </div>
                    )
                })}
                <AddComment add={this.addNewComment}/>
            </div>
        );
    };
}

export default CommentSection;