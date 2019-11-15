import React, { Component } from 'react'
import './Comment.css'
import nextId from 'react-id-generator'


export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comment,
            // newComments: {
            // id: 0,
            // username: "unknownsub",
            // text: ""
            // }
            comment: ""
            
        }
    }

    changeHandler = (e) => {
        this.setState({ comment: e.target.value })
    }

    submitCommentHandler = (e) => {
        e.preventDefault()
        let newComments = {
            id: nextId(),
            username: "unknownsub",
            text: this.state.comment
        }
        this.state.comment === "" ? alert('comment is empty') :
        this.setState({
            comments: [...this.state.comments, newComments],
            comment: ""
        })
        
    }

    render() {
        // console.log(this.state.comments)
        return (
            <div>
                <div className="comment__container">
                {this.state.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                             <h3>{comment.username}</h3>
                             <p>{comment.text}</p>
                        </div>
                    )
                })}
                </div>
                <form className="comment-form" onSubmit={this.submitCommentHandler}>
                <input className="comment-input" type="text" value={this.state.comment} onChange={this.changeHandler} placeholder="Add a Comment...."/>
                <input className="btn" type="submit" value="Post"/>
                </form>
                
            </div>
        )
    }
}
