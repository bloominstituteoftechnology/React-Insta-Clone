import React from 'react';
import '../CommentSection/CommentSection.css'
import speechbub from './speechbub.png';
import instaheart from './instaheart.png';

function CommentSection(props) {
    return (
        <div className='comment-container'>
            <div className='comment-icons'>
                <div className='comment-heart'>
                    <img src={instaheart} alt='heart'/>
                </div>
                <div className='comment-bub'>
                    <img src={speechbub} alt='bubble'/>
                </div>
            </div>

            <p> <span> {props.data.likes} likes </span> </p>
            <p> 
                <span> {props.data.comments[0].username} </span>  {props.data.comments[0].text}
            </p>
            <p>
                <span> {props.data.comments[1].username} </span>{props.data.comments[1].text}
            </p>
            <p>
                <span> {props.data.comments[2].username} </span> {props.data.comments[2].text}
            </p>
            <p>
                {props.data.timestamp}
            </p>
            <div className='input'>
                <input placeholder='Add a comment...'/>
            </div>

        </div>

    );
}

export default CommentSection;