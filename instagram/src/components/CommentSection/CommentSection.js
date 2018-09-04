import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div className = 'comment-section'>

                {this.state.comments.map((comment, index) => 
                <Comment key={index} comment ={comment} />
                )}

                <CommentInput />

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