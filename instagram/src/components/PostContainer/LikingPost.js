import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../CommentSection/Comment';

const LikingPostDiv = styled.div`
height: 10px;
  width: 10px;
  margin: 10px;
  padding-bottom 15px;
`;


const LikingPost = props =>{
    return [
        <FlexWrapper 
        key="likes-icons-container"
        onClick={props.incrementLike}
        comment
        >
            <LikingPostDiv>
                <i className="far fa-heart" />
            </LikingPostDiv>
            <LikingPostDiv>
                <i className="far fa-comment" />
            </LikingPostDiv>
        </FlexWrapper>,
        <FlexWrapper key="likes-container" comment>
            <LikingPostDiv>{props.likes}</LikingPostDiv>
        </FlexWrapper>
    ];
};

export default LikingPost;