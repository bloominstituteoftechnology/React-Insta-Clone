import React, {Component} from 'react';
const Icons =(prop)=>{
    return (
        <div className='icon-container'>
            <div className="icon">
                <img src="https://image.ibb.co/etjUB9/heart.png" alt="heart"></img>
                <img src="https://image.ibb.co/cymLJp/comment.png" alt="comment"></img>
            </div>
            <div className='like'>
                {prop.like} likes
            </div>
        </div>
    )
}
export default Icons;