import React from 'react';
import Comment from "./Comment";
import './CommentSection.css';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
            timestamp: '',
            commentValue: '',
        }
    }
    componentDidMount() {
        this.setState(state => ({
            content: this.props.content,
            timestamp: this.props.timestamp,
        }))
    }

    inputChangeHandler = ({target}) =>  {
        this.setState(state   =>  ({
            commentValue: target.value,
        }))
    }
    
    addNewComment = e => {
        e.preventDefault();
        let contentCopy = this.state.content;
        if (this.state.commentValue === '') {
            alert('You have to write a comment first!')
        } else {
            contentCopy.push({
                username: localStorage.getItem('user'),
                text: this.state.commentValue})
            this.setState(state => ({
                content: contentCopy,
                commentValue: '',
            }))
        }
        


    }

    render() {
        return (
            <div className="comments-main-container">
                <div className="comments-container">
                    {this.state.content.map(comment => {
                        return <Comment username={comment.username} text={comment.text}/>
                    })}
                    {/* Time stamp*/}
                    <div className="timestamp">{moment(this.props.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</div>
                    {/* Divider (border-bottom)*/}
                </div>  
                {/* Add Comment section*/}
                <form className="new-comment" onSubmit={this.addNewComment}>
                    <input className="comment-input" type="text" placeholder="Add a comment..." value={this.state.commentValue} onChange={this.inputChangeHandler}/>
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
}

export default CommentSection;