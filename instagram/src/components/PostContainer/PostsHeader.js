import React  from "react";
import sc from 'styled-components';

const PostsHeaderDiv = sc.div`
    display: flex;
`;
const ImgWrapDiv = sc.div`
    height: 100%;
    width: 100%;
`;
const PostImage = sc.div`
    width: 100%;
`;


const PostsHeader = props => {
    return (
    <PostsHeaderDiv>
        <ImgWrapDiv>
            <PostImage
            alt='Header for the post'
            src={props.thumbnailUrl}
            
            />
        </ImgWrapDiv>        
        <div>{props.username}</div>
    </PostsHeaderDiv>  
    );
}

export default PostsHeader;