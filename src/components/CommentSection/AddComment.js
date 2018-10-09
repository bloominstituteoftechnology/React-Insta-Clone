import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './comment.css';

const AddComment = (props) => {
    return (
        <form className="add-comment" onSubmit={props.onSubmit}>
            <input placeholder=" Add a comment..." value={props.value} onChange={props.onChange} />
            <FontAwesomeIcon icon='ellipsis-h'/>
        </form>
    )
}

export default AddComment;