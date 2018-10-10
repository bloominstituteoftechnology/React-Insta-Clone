import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js'

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: [],

        }
    }

    addNewComment =(event) =>{
        const newComment ={
            username:'Griffin',
            text:''
        }
    }
  
    render() {
        return (
            <div>
                {this.props.comments.map((comment) => {
                    return (
                        <Comment comment={comment} key={Math.random()} />
                    )
                })}
            </div>
        )
    }
}

export default CommentSection;