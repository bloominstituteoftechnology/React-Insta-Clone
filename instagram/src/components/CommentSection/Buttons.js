import React from 'react';
import './CommentSection.css';

const Buttons = (props) => {

    return (
        <div>
            <div className='action-buttons'>
                <i onClick={props.addLike} className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
                <div className='likes'>{props.likes} </div>
            </div>
            
        </div>
    )
}


export default Buttons;