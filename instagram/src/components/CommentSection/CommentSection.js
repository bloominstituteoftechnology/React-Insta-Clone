import React from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './comment.css';

const CommentSection = (props) => {
    return (
        <section className="comment-container">
            <section className="comment-icons">
                <FontAwesomeIcon icon='heart' />
                <FontAwesomeIcon icon='comment-alt' />
            </section>
            <p><strong>{props.likes} likes</strong></p>
            <section className="comments">
                {props.comments.map(comment => (
                    <div>
                        <Comment user={comment.username}
                                 text={comment.text}/>
                    </div>
                ))}
            </section>
            <section className="add-comment">
                <input placeholder=" Add a comment..."/>
                <FontAwesomeIcon icon='ellipsis-h'/>
            </section>
        </section>
    )
}

export default CommentSection;