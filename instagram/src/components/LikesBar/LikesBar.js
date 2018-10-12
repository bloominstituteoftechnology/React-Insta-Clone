import React from 'react';
import PropTypes from 'prop-types';
import {Image} from '../Styled/Styled';
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    margin-top:15px;
    margin-left:15px;
`
const LikeBarLikes = Styled.p`
    font-size:1.6rem;
    margin-top:5px;
    margin-left:15px;
`

const LikesBar = props =>{
    return(
        <div>
            <WrapperDiv>
                <Image alt='like' onClick={props.handleLikeClick} src={require('../../static/img/heart.png')}></Image>
                <Image alt='comment' marginL20 src={require('../../static/img/comment.png')}></Image>
            </WrapperDiv>
            <LikeBarLikes>{props.likes} likes</LikeBarLikes>
        </div>
    )
}

LikesBar.propTypes = {
    likes: PropTypes.number
}

export default LikesBar;