import React from 'react';
import Comment from './Comment'
import './Comment.css'
import AddComment from './AddComment'

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.data.comments,
            date: props.data.timestamp,
            newComment: '',
            username: 'jaymzsocool'
        }
    }    

    updateNewComment = event => this.setState({ newComment : event.target.value})

    addNewComment=event=>{
        event.preventDefault();
        let comments = this.state.comments.slice();
        comments.push({username : this.state.username, text: this.state.newComment})
        this.setState( {comments: comments, newComment: ""})
    }

    render(){
        return(
            <div className = "comment-container">
                {this.state.comments.map(data =>
                <Comment
                    name = {data.username}
                    comment = {data.text}
                />
                )}
                <div className = "time">
                    {this.state.date}
                </div>
                <AddComment 
                    handleAdd = {this.addNewComment}
                    value = {this.state.newComment}
                    handleUpdate = {this.updateNewComment}
                />
            </div>
        ) 
    }
          
    
    
           
}

export default CommentSection