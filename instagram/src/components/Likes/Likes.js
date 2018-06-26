import React from 'react';
import './Likes.css';

const Likes = props => {
    return(
        <div className="likeBar" key={props.likeBox.likes}>
            <i className='fa fa-heart'></i>
            <i className='fa fa-comment'></i>
            <span> {props.likeBox.likes} </span>
        </div>
    )
}

export default Likes;