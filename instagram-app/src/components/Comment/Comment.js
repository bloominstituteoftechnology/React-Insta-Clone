import React, { Component } from 'react'
import './Comment.css'
import nextId from 'react-id-generator'


export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comment,
            newComments: {
                        id: 0,
                        username: "unknownsub",
                        text: ""
                        }
            
        }
    }

    changeHandler = (e) => {
        this.setState({newComments: {
            id: nextId(),
            username: "unknownsub",
            text: e.target.value
        } })
    }

    submitCommentHandler = (e) => {
        e.preventDefault()
        this.state.newComments.text === "" ? alert('comment is empty') :
        this.setState({
            comments: [...this.state.comments, {...this.state.newComments}],
            newComments: {text: ""}
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
                <input className="comment-input" type="text" value={this.state.newComments.text} onChange={this.changeHandler} placeholder="Add a Comment...."/>
                <input className="btn" type="submit" value="Post"/>
                </form>
                
            </div>
        )
    }
}
