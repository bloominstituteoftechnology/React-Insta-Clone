import React from 'react'
import './Posts.css'

const LikeSection = (props) => {
    return (
        <div className="like-sect">
            <i onClick={props.incrementLike} className={ !props.bool ? "far fa-heart" : "fas fa-heart"}></i>
            <i className="far fa-comment"></i>
            <h4 className="like-heart">{props.likes} likes</h4>
        </div>
    )
}

export default LikeSection;