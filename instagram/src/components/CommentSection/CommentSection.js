import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import Comment from '../Comment/Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="comment-container">
                <div>{this.props.username}</div>
                <div>{this.props.text}</div>
            </div>
        );
    }

};

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default CommentSection;