import React from 'react';

const Counter = (props) => {
    return (
        <div className='likesPostImg'>
            <div>
                <span className='red'><i className="fa fa-heart-o" onClick={props.addOne}></i></span>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
            </div>
            <div>
                <span className='count'>{props.likeState}</span> likes
            </div>
        </div>
    )
}
 
export default Counter;