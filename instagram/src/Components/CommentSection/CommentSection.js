import React, {Component} from "react";
import NewComment from './Comment';
import "./CommentSection.css";
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments, 
            timeStamp: props.timeStamp,
            newComment: '', 
            username: ""
        }
    }

    componentDidMount(){
        const username = localStorage.getItem('username'); 
        this.setState({
            username: username
        })
    }

    addNewCommentHandler = event => {
        let inputValue = event.target.value; 
        this.setState({
            newComment: inputValue
        })
    }

    onSubmitHandler = event => {
        event.preventDefault(); 
        let comments =this.state.comments.slice(); 
        console.log(comments)
        let comment = {
            username: this.state.username,
            text: this.state.newComment
        }
        comments.push(comment); 
        this.setState({
            comments: comments, 
            newComment: ""
        })

    }

    render() {
        return (
            <div className = "commentSection">
               {this.state.comments.map((comment, index) => {
                  return <NewComment key = {index} commentUser = {comment.username} commentText = {comment.text}/>
                })}
                <p className = "timestamp">{this.state.timeStamp}</p>
                <div className = "addComment">
                    <form onSubmit = {this.onSubmitHandler}>
                        <input value = {this.state.newComment} type = "text" onChange = {this.addNewCommentHandler} placeholder = "Add a comment..." />
                        <input type = "submit" />   
                    </form>
                </div>  
            </div>
        )
    }
    
   

}
    


CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string, 
        text: PropTypes.string
    })
}

export default CommentSection; 
