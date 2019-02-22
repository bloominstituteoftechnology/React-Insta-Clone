import React from "react";
import styled from "styled-components";

const PostImg = styled.img`
    display: flex;
    width: 100%;
`

const Img = props => {
    return (
        <PostImg src={props.img.imageUrl} alt="user post"/>
    )
}

export default Img;