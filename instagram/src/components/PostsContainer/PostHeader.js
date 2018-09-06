import React from 'react';
import styled, {css} from "styled-components";


const Header = styled.header`
    display: flex;
    margin: 10px;
`;

const PostThumbail = styled.div`
    height: 40px;
    width: 40px;
`;

const Username = styled.div`
    font-weight: bold;
    margin-left: 10px;
`;

const PostThumb = styled.img`
    height: 100%;
    border-radius: 50%;
`;

 function PostHeader(props) {
    return (
        <Header primary>
            <PostThumbail>
                <PostThumb src={props.thumbnailUrl} alt="post header" />
            </PostThumbail>
            <Username>
              <p>{props.username}</p>
            </Username>
        </Header>
    );
};
 export default PostHeader;