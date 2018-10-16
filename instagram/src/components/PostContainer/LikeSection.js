import React from 'react';
import PropTypes from 'prop-types';
import heart from './img/heart.png';
import bubble from './img/speech-bubble.png';


const LikeSection = props => {
    return(
        <div className="likes-container">
            <div className="img-like-box">
            <img className="like-img" src={heart} alt=""/>
            <img className="like-img" src={bubble} alt=""/>
            </div>
            
            <p className="likes">{props.likes} likes</p>
        </div>
    );
}

export default LikeSection;


LikeSection.propTypes = {

    likes: PropTypes.number
}