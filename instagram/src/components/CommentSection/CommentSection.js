import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js'

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            holder: ''
        }
    }
    inputHandler = (event) => {
        const value = event.target.value;
        this.setState({
            holder: value,
        })
    }
    addNewComment = (event) => {
        event.preventDefault()
        const newComment = {
            username: 'Griffin',
            text: this.state.holder
        }
        this.setState({
            comments: [...this.props.comments, newComment],
            holder:''
        })
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments,
            holder:''
        })
        
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.comments.map((comment) => {
                        return (

                            <Comment comment={comment} key={Math.random()} />

                        )
                    })}
                </div>

                <div className='timestamp'>{this.props.timestamp}</div>
                <form className='add-comment' onSubmit={this.addNewComment}>

                    <input className='comment-input' placeholder='Add a comment...' onChange={this.inputHandler} value={this.state.holder}/>
                    <i className="fas fa-ellipsis-h"></i>
                </form>
                
            </div>

        )
    }
}

export default CommentSection;