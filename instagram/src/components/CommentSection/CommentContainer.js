import React from 'react';
import './CommentContainer.css'
import AddComment from './addComment'

class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            username: 'Lorenzo',
            text: '',
            newComment: ''
        }
    }
    AddedComment = event => {
        event.preventDefault()
        const comments = Object.assign([], this.state.comments)
        const newComment = {text: this.state.newComment, username: 'LorenzoEvans'}
        //  newComment.push({username: 'LorenzoEvans', text: this.state.newComment })
        comments.push(newComment)
         this.setState({
             comments, newComment: ''
         })
    }
    CommentHandler = event => {
        event.preventDefault()
        this.setState({
            newComment: event.target.value 
        })
    }
    render(){
     return(
        <div className='CommentContainer'>
        {this.props.comments.map(comment => <div key={comment.text}>
        <div> 
        {comment.username}:
        {' '}
        {comment.text}
        </div>
        {/* <div> {comment.text}</div> */}
        </div>)}
        <AddComment AddedComment={this.AddedComment} CommentHandler={this.CommentHandler}/>
        </div>
        )
    }
       


}

   

export default CommentContainer