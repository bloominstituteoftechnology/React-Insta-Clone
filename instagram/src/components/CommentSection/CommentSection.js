import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentLikes from './CommentLikes';
import './Comment.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    /*Create a function in CommentSection.js called addNewComment that 
    takes in an event and an index number. The function will add the comment 
    that is on the event object to the post that is at that index number.
    */

    

    addNewComment = (commentText) => {
        const newComments = this.state.comments;
        const currentUser = localStorage.getItem('username');
        newComments.push({username: currentUser, text: commentText});
        this.setState({comments: newComments});
    }


    render() {
        
        return (
            <div className = 'comment-section'>

            <CommentLikes likes={this.props.likes}/>

                {this.state.comments.map((comment, index) => 
                <Comment key={index} comment ={comment} />
                )}

                <CommentInput addNewComment={this.addNewComment}/>

            </div>
        )
    }
}

    /*The CommentSection component will receive the array of comments as props 
    and render a Comment component with the username of the poster 
    as well as the post's text. Additionally, there should be an input box 
    that allows users to submit a new comment for any post. 
    We'll work on posting new comments tomorrow.
    */
    CommentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        }))
    }


export default CommentSection;