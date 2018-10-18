import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';
import './CommentContainer.css'
import AddComment from './addComment'

class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            username: '',
            text: ''
        }
    }

    AddedComment = () => {
         let newComment = Object.assign([], this.state.comments)

         newComment.push({username: this.state.username, text: this.state.text })

         this.setState({
             comment: this.state.comments.concat([newComment])
         })
    }

    CommentHandler = (event) => {
        this.setState({
            text: event.target.value 
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