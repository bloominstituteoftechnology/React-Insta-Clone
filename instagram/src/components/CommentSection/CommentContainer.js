import React, { Component } from 'react';
import AddComment from './AddComment';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: props.comments,
            username: 'Me',
            text: '',
            
         }
         console.log(this.state.comment)
    }

    change = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addComment = e => {
        e.preventDefault()
        this.state.comment.push({
            username: this.state.username,
            text: this.state.text
        })
        this.setState({text: ''})
    }


    render() { 
        return ( 
            <div>
            
            {this.state.comment.map((comment, index) => {
                return <div key={index}>
                <p><strong>{comment.username}</strong> {comment.text}</p>
                </div>
            })}

            <AddComment text={this.state.text} comment={this.addComment} change={this.change}/>
            </div>
         );
    }
}
 
export default CommentContainer;