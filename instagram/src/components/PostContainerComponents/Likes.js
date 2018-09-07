import React from 'react';
import './Post.css';
import styled from 'styled-components';

const LikesSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 2%;
    margin-top: -5px;
`;


const LikesIcons = styled.div`
    display: flex;
    width: 20%;
    margin-left: 3%;
    padding-top: 10px;
    height: 40px;
`;

const HeartImg = styled.img`
    width: 30px;
    height: 30px;
    padding-top: 8px;
`;

const BubbleImg = styled.img`
    width: 34px;
    height: 30px;
    padding-top: 8px;
    padding-left: 10px;
`;

const LikesNumber = styled.div`
    text-align: left;
    font-weight: bold;
    padding-top: 10px;
    margin-left: 3%;
    padding-bottom: 10px;
`;

const Likes = (props)=> {
    return (
        <LikesSectionWrapper onClick={props.addLike}>
            <LikesIcons>
            <div className='icon heart'>
                <HeartImg src='https://image.flaticon.com/icons/svg/1082/1082134.svg'/>
            </div>
            <div className='icon bubble'>
                <BubbleImg src='https://image.flaticon.com/icons/svg/118/118712.svg' />
            </div>
            </LikesIcons>
            <LikesNumber>
                {props.likes} likes
            </LikesNumber>
        </LikesSectionWrapper>
    );
}

export default Likes;