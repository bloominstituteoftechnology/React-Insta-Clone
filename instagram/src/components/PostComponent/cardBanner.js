import React from 'react'
import './Post.css'

function CardBanner (props){
    return (
        <div className="cardBanner">
            <img src={props.imgSrc} alt="userICon"/>
            <div className="userName">{props.userName}</div>
        </div>
    )
}

export default CardBanner