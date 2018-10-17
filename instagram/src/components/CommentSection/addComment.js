import React from 'react';
import ReactDOM from 'react-dom';

const AddComment = (props) => {
    return(
        <div>
            {props.username}
            {props.text}
        </div>
    )
}

export default AddComment