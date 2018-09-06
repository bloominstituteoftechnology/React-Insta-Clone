import React from 'react';
import './Post.css';
import styled from 'styled-components';

const LikesSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 87%;
    margin-left: 6.5%;
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
                <HeartImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LktPZC6w-ymgFFTzKvQn7LXQyyZs5mlIm9zgjOiHzyBkvEFD'/>
            </div>
            <div className='icon bubble'>
                <BubbleImg src='https://cdn2.iconfinder.com/data/icons/web-and-mobile-ui-volume-11/48/517-512.png' />
            </div>
            </LikesIcons>
            <LikesNumber>
                {props.likes} likes
            </LikesNumber>
        </LikesSectionWrapper>
    );
}

export default Likes;