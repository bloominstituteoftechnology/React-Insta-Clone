import React, {Component} from "react";
import NewComment from './Comment';
import "./CommentSection.css";
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments, 
            timeStamp: props.timeStamp
        }
    }

    render() {
        return (
            <div className = "commentSection">
               {this.state.comments.map((comment, index) => {
                  return <NewComment key = {index} commentUser = {comment.username} commentText = {comment.text}/>
                })}
                {console.log(this.state.comments)}
                <p className = "timestamp">{this.state.timeStamp}</p>
                <div className = "addComment">
                    <p>Add a comment...</p>
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
