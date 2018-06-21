import React from 'react';
import Styled from 'styled-components';

export const Thumbnail = Styled.img`
width: 30px;
border-radius: 50px;
margin: 15px 10px 15px 15px;
;`

export const PostHead = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;

const PostHeader = props => {
    return (
        <PostHead>
           
        <Thumbnail alt='thumbnail' src={props.thumbnail} />
        {props.user}
        </PostHead>
    )
}

export default PostHeader;