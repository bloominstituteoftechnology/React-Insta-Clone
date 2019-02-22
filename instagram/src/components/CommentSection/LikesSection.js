import React, { Component } from 'react';
import styled from 'styled-components';

const PostFeedbackContain = styled.div`
    display: flex;
    flex-direction: column;
`;

const Far = styled.i`
    font-size: 30px;
    font-weight: 100;
    margin: 5px 10px;
    -webkit-text-stroke: 1px white;
`;

const FeedbackItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LikeAmount = styled.div`
    text-align: left;
    font-weight: bold;
    padding-left: 15px;
`;

class LikesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
        }
    };

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return ( 
            <PostFeedbackContain>
                <FeedbackItems>
                    <div className="right-feedback">
                        <Far className="far fa-heart" 
                        onClick={this.incrementLike} 
                        />
                        <Far className="far fa-comment" />
                        <Far className="far fa-paper-plane" />
                    </div>
                    <div className="left-feedback">
                        <Far className="far fa-bookmark" />
                    </div>
                </FeedbackItems>
                
                <LikeAmount>
                    <p>{this.state.likes} likes</p>
                </LikeAmount>
            </PostFeedbackContain>
        );  
    }
}

export default LikesSection;