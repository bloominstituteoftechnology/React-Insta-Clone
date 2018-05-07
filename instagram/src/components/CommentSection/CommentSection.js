import React from 'react'; 
import { Row, Col } from 'reactstrap'; 
import './CommentSection.css'; 

const CommentSection = props => {
    return (
        <Row> 
            <span className="username-comment">{props.comment.username}</span> 
            <span>{props.comment.text}</span>
        </Row>
    ); 
}; 

export default CommentSection; 