import React, { Component } from 'react';
import './CommentSection.css';
import Moment from 'react-moment';


class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            newComment: '',
            allComments: [],
            time: ''

        }
    }

    componentDidMount = () => {
        this.setState({
            allComments: this.props.comments,
            time: this.props.data
        })
    }

    onChange = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    addComment = (event) => {
        event.preventDefault();
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
                        return <div key={index} className="comments">
                            <span className="comment-username">{comment.username}</span>
                            {' '}
                            <span>{comment.text}</span>
                        </div>
                    })}
                </div>
                <Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>
                    {this.state.time}
                </Moment>
                <form onSubmit={this.addComment} className="addComment">
                    <input value={this.state.newComment} onChange={this.onChange} type="text" placeholder="Add a comment..."/> 
                </form>
            </div>
        );
    }
}


export default CommentSection;