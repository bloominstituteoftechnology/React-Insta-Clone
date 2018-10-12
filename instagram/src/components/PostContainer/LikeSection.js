import React from 'react';
import heart from '../../images/Instagram-Heart.png';
import comment from'../../images/comment.png';
import styled from 'styled-components';

const Likesection= styled.div`
    display: flex;
    justify-content: flex-start;
`
const LikeNumberSection = styled.div`
    display: flex;
    padding:  0px 0px 10px  15px;
    font-weight: bold;
`
const Img = styled.img`
    height: 35px;
    margin: 10px;
`

const LikeSection = props => {
    return (
        
        <div> 
            <Likesection
            className="like-section"
            key="likes-icons-container"
            onClick={props.incrementLike}>
                <Img src ={heart} alt ='heart' />
                <Img src={comment} alt ='comment' />
            </Likesection>
            <LikeNumberSection key="likes-container">
                <div className="like-section-wrapper">{props.likes}         Likes
                </div>
            </LikeNumberSection>
        </div>
    )
}

export default LikeSection;