import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './comments.css';




const CommentSection = (props) =>{




    
        return (
            <div className={'comments'}>
            {props.comments.map(comment=>(
            <div>{comment.username}: {comment.text}</div>
            ))
            }
            <input className={'commenttext'} type="text" placeholder='Add a comment...'/>
            </div>
        )
    }


export default CommentSection;
