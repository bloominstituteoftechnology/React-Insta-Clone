import React from 'react';
import { Row } from 'reactstrap';
import './CommentSection.css';
import '../PostContainer/PostContainer.js'

const CommentSection = props => {
    return (
        <Row>
            <span>{props.username}</span>
            <span>{props.comment}</span>
            
        </Row>
    )};
    

            
export default CommentSection;