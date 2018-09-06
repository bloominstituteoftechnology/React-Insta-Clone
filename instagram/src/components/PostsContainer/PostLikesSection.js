import React from 'react';
import styled, {css} from "styled-components";
 
const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FeedbackItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LikePost = styled.div`
    text-align: left;
    font-weight: bold;
    padding-left: 15px;
`;

function PostLikesSection(props) {
    return (
        <FeedbackContainer>
            <FeedbackItems>
                <div className="left-icons">
                    <i className="far fa-heart"
                    onClick={props.incrementLike}
                    />
                    <i className="far fa-comment" />
                    <i className="far fa-paper-plane" />
                </div>
                <div className="right-icons">
                    <i className="far fa-bookmark"/>
                </div>
            </FeedbackItems>
            <LikePost>
                <p>{props.likes} likes</p>
            </LikePost>
        </FeedbackContainer>
    );
};

 export default PostLikesSection;