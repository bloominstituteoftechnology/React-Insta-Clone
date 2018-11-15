import React from 'react';
import HeartIcon from './hearticon.png';
import CommentIcon from './commenticon.png';
import './LikesSection.css'
import styled from 'styled-components';

const LikesWrapper = styled.div`
    margin-bottom: 10px;
`;
const IconWrapper = styled.div`
    display: flex;
    height: 40px;
`;
const LikesIcon = styled.img`
    width: 40px;
    margin-left: 15px;
`;
const CommentIconImg = styled.img`
    width: 35px;
    margin-top: 4px;
`;
const LikesCounter = styled.div`
    font-weight: bold;
    margin-left: 23px;
`;


const LikesSection = props => {
    return (
        <LikesWrapper>

            <IconWrapper>
                <div>
                    <LikesIcon 
                        src={HeartIcon} 
                        alt="icon" 
                        onClick={props.incrementLikes}
                    />
                </div>
                <div>
                    <CommentIconImg src={CommentIcon} alt="icon" />
                </div>
            </IconWrapper>

                <LikesCounter>{props.likes} likes</LikesCounter>
        </LikesWrapper> 

    )
}

export default LikesSection;