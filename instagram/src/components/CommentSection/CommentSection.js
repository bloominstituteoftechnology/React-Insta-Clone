import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js'
import NewComment from './NewComment.js';
import Buttons from './Buttons.js';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.postData.likes,
            comment: [],
            text: '',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ comment: this.props.postData.comments })
        }, 5)
    }

    textInput = (event) => {
        this.setState({
            text: event.target.value,
        })
    }

    addNewComment = (event) => {
        event.preventDefault();
        const newComment = {
            username: 'buttmunch85',
            text: this.state.text,
        }
        this.setState({
            comment: [...this.state.comment, newComment],
            text: '',
        })
    }

    addLike = (event) => {
        event.preventDefault();
        console.log(this.state.likes)
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
    }


    render() {
        return (
            <div>
                <Buttons
                    likes={this.state.likes}
                    addLike={this.addLike}
                />
                {this.state.comment.map((comment) => {
                    return (
                        <Comment comment={comment} key={Math.random()} />
                    )
                })}
                <div className='timestamp'>{this.props.postData.timestamp}</div>
                <NewComment
                    text={this.state.text}    
                    newComment={this.addNewComment}
                    textInput={this.textInput}
                />
            </div>
        )
    }
}

export default CommentSection;