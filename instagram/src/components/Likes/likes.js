import React from 'react';
import heart from './img/heart.png';
import bubble from './img/speech-bubble.png';


const Likes = props => {
    return(
        <div className="likes-container">
            <div className="img-like-box">
            <img className="like-img" onClick={props.addLike}src={heart} alt=""/>
            <img className="like-img" src={bubble} alt=""/>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    );
}


export default Likes;