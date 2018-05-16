import React from 'react';
import { Row } from 'reactstrap';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <Row className="row-comment">
            <p className="username">{props.comment.username} <span className="username-comment">{props.comment.text}</span></p>
        </Row>
    );
};

export default CommentSection; 