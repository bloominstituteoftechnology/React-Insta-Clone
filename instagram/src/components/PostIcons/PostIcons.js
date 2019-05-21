import React, { Component } from 'react';
import heart from '../../assets/heart.png';
import comment from '../../assets/comment.png';
import styled from 'styled-components';

const PcImage = styled.img`
    width: 60px;
`;

const PostIcon = styled.div`
    padding-top: 5px;
`;

class PostIcons extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return(
            <PostIcon>
                <PcImage 
                    src={heart} 
                    alt="Heart" 
                />
                <PcImage src={comment} alt="Comment" />
            </PostIcon>
        )
    }
}

export default PostIcons;