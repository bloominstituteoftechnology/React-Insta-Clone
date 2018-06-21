import React from 'react';
import styled from 'styled-components';
const PostContentContainer = styled.div`

`;

const PictureContent = styled.img`
    width: 100%;
`;

const FooterContent = styled.div`
    background: white;
    padding: 12px 1.5%;

`;
const FooterIcons = styled.div`
    background: white;
    padding: 12px 1.5% 0;
    cursor: pointer;
    font-size: 3rem;
    font-weight: 300;
`;
const HeartIcon = styled.i`
    margin-right: 3%;

&:hover {
    color: red;
}
&.heart--active {
    color: red;
}

`;

const CommentIcon = styled.i`
    transform: scaleX(-1);

    &:hover {
    color: lightblue;
    }
`;

const Likes = styled.p`
    margin: 6px 2% 0;
    font-weight: 400;
    font-size: 2rem;
`; 
const PostContent = (props) => {
    return (
        <PostContentContainer>
            <PictureContent src={props.imageUrl} alt='users main content' />
            <FooterContent >
                <FooterIcons>
                    <HeartIcon className="far fa-heart" onClick={(e) => {
                        props.addLikeHandler(e, props.index);
                        e.target.classList.toggle('heart--active');

                    }}>
                    </HeartIcon>
                    <CommentIcon className="far fa-comment"></CommentIcon>
                </FooterIcons>
                <Likes>{props.likes} likes</Likes>
            </FooterContent>
        </PostContentContainer>
    );
}

export default PostContent;