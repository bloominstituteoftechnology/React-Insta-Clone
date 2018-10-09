import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayDeleteComment: false,
            displayDeleteCommentstyle: {}
        }
    }
    
    askForDelete = (event)=>{
        event.preventDefault();

        const style = {
            position: 'relative',
            top: '0px',
            left: '20px'
        }
        this.setState({
            displayDeleteComment: true,
            displayDeleteCommentstyle: style
        })
    }

    deleteComment = (event)=>{
        event.preventDefault();
        this.props.deleteComment(this.props.postIndex, this.props.commentIndex);
    }
    render(){
        return(
            <div className="comment">
                <p onClick={this.askForDelete}><strong>{this.props.comment.username}</strong> {this.props.comment.text}</p>
                {this.state.displayDeleteComment ? <div className="delete-comment" onClick={this.deleteComment} style={this.state.displayDeleteCommentstyle}>Click To Delete Comment</div> : <span></span>}
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