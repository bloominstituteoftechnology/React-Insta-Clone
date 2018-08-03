import React from 'react';
import styled from 'styled-components';

const PostFeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FeedbackItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Far = styled.i`
    font-size: 30px;
    font-weight: 100;
    margin: 5px 10px;
    -webkit-text-stroke: 1px white;
`;

const LikeAmount = styled.div`
    text-align: left;
    font-weight: bold;
    padding-left: 15px;
`;

const PostLikesSection = props => {
    return (
        <PostFeedbackContainer>
        <FeedbackItems>
            <div className="right-feedback">
                <Far className="far fa-heart" 
                onClick={props.incrementLike}
                />
                <Far className="far fa-comment" />
                <Far className="far fa-paper-plane" />
            </div>
            <div className="left-feedback">
                <Far className="far fa-bookmark" />
            </div>
        </FeedbackItems>
        <LikeAmount>
            <p>{props.likes} likes</p>
        </LikeAmount>
        </PostFeedbackContainer>
    );
};

export default PostLikesSection;