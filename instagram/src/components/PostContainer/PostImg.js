import React from 'react';
import styled from 'styled-components';

const PostImgContainer = styled.div`
    display: flex;
    max-width: 73%;
    margin-left: 13.5%;
`;

const PostIImg= styled.img`
`;

function PostImg(props) {
    return(
        <PostImgContainer>
            <PostIImg 
                className="postImg"
                src={props.postImg}
                alt="content"
            />
        </PostImgContainer>
    )
}

export default PostImg;