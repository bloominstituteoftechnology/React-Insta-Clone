import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    display: flex;
    margin-top:15px;
    margin-bottom:15px;    
`
const Avatar = Styled.img`
    width:30px;
    height:30px;
    border-radius: 50%;
    margin-left:20px;
`
const UserName = Styled.p`
    font-size:1.6rem;
    margin-left:8px;
    margin-top:10px;
`


const PostHeader = props =>{
    return (
        <WrapperDiv>
            <Avatar src={props.data.thumbnailUrl} alt='avatar'></Avatar>
            <UserName>{props.data.username}</UserName>
        </WrapperDiv>
    )
}

PostHeader.propTypes = {
    thumbnailUrl:PropTypes.string,
    username:PropTypes.string
}

export default PostHeader;