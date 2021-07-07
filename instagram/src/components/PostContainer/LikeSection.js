import React from 'react'
import './Posts.css'
import {LikeSectionDiv, LikesNuserName } from './StyledPosts'

const LikeSection = (props) => {
    return (
        <LikeSectionDiv>
            <i onClick={props.incrementLike} className={ !props.bool ? "far fa-heart" : "fas fa-heart"}></i>
            <i className="far fa-comment"></i>
            <LikesNuserName>{props.likes} likes</LikesNuserName>
        </LikeSectionDiv>
    )
}

export default LikeSection;