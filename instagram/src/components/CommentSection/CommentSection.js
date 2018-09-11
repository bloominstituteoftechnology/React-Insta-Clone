import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    addNewComment = event => console.log('This is a comment');

    render() {
        return (
            <div className="CommentSectionDiv">
            {this.state.comments.map((element, index) => <Comment comment={element} key={index}/>)}
            <input type="text" placeholder="Add a Comment" />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;