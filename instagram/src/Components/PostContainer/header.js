import React from "react";
import Username from "../Styles/reusable";
import styled from "styled-components";

const Thumbnail = styled.img`
    display: flex;
    border-radius: 50%;
    height: 40px;
    padding: 5px 20px;
`

//header returns username and thumbnail
const Header = props => {
    return (
            <>
                <Thumbnail src={props.post.thumbnailUrl} alt="user thumbnail"/>
                <Username size="2em" weight="bold">{props.post.username}</Username>
            </>
    )
}

export default Header;