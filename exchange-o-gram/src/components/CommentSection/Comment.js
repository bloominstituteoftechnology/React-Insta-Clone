import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayDeleteComment: false
        }
    }
    
    askForDelete = (event)=>{
        event.preventDefault();
        this.setState({
            displayDeleteComment: true
        })
    }

    deleteComment = (event)=>{
        event.preventDefault();
        this.props.deleteComment(this.props.postIndex, this.props.commentIndex);
    }
    render(){
        return(
            <div className="comment">
                <p><strong>{this.props.comment.username}</strong> {this.props.comment.text}</p>
                <div className="comment-options" onClick={this.askForDelete}>···
                    {this.state.displayDeleteComment ? <div className="delete-comment" onClick={this.deleteComment}>Delete?</div> : null}
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}

export default Comment;