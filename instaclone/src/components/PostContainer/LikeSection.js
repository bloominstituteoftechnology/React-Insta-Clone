import React from 'react';
import heart from '../../assets/heart.png';
import redheart from '../../assets/redheart.png';
import comment from '../../assets/comment.png';
import styled from 'styled-components';
import share from '../../assets/shareicon.jpg';
import bookmark from '../../assets/bookmark.png';

const LikeImg = styled.img`
    width: 25px;
    padding: 10px 10px 5px 5px;
    box-sizing: content-box;
`
const LikeSectionIcons = styled.div`
    display: flex;
    justify-content: space-between;
`

const LikeSectionContainer = styled.div`
    margin-left: 10px;
`

const LikeSection = props => {
    return(
        <LikeSectionContainer>
            <LikeSectionIcons>
        <div>
        {props.liked ? <LikeImg src={redheart} onClick={props.addLike}/> : <LikeImg src={heart} onClick={props.addLike}/>}
        <LikeImg src={comment} />
        <LikeImg src={share} />
        </div>
        <div>
        <LikeImg src={bookmark} />
        </div>
        </LikeSectionIcons>
        <div>
            <p><strong>{props.likes}</strong> likes</p>
        </div>
        </LikeSectionContainer>
    )
}

export default LikeSection;